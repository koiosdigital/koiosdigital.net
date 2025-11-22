export default defineEventHandler(async (event) => {
    const slug = event.context.params?.slug || '';
    const targetUrl = `https://analytics.koiosdigital.net/api/${slug}`;

    // Get the request method
    const method = event.method;

    // Get query parameters
    const query = getQuery(event);
    const queryString = new URLSearchParams(query as Record<string, string>).toString();
    const fullUrl = queryString ? `${targetUrl}?${queryString}` : targetUrl;

    // Get request body if present
    let body;
    if (method !== 'GET' && method !== 'HEAD') {
        body = await readBody(event).catch(() => undefined);
    }

    // Forward relevant headers
    const headers = new Headers();
    const requestHeaders = getHeaders(event);

    // Forward important headers but exclude host-specific ones
    const headersToForward = [
        'content-type',
        'authorization',
        'user-agent',
        'accept',
        'accept-encoding',
        'accept-language',
        'cache-control',
    ];

    headersToForward.forEach(header => {
        if (requestHeaders[header]) {
            headers.set(header, requestHeaders[header]);
        }
    });

    try {
        // Make the proxied request
        const response = await fetch(fullUrl, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });

        // Forward response headers
        const responseHeaders: Record<string, string> = {};
        response.headers.forEach((value, key) => {
            // Skip headers that shouldn't be forwarded
            if (!['content-encoding', 'transfer-encoding', 'connection'].includes(key.toLowerCase())) {
                responseHeaders[key] = value;
            }
        });

        // Set response headers
        Object.entries(responseHeaders).forEach(([key, value]) => {
            setHeader(event, key, value);
        });

        // Get response body
        const contentType = response.headers.get('content-type') || '';
        let responseBody;

        if (contentType.includes('application/json')) {
            responseBody = await response.json();
        } else if (contentType.includes('text/') || contentType.includes('application/javascript') || contentType.includes('application/x-javascript')) {
            responseBody = await response.text();
        } else {
            responseBody = await response.arrayBuffer();
        }

        // Set status code
        setResponseStatus(event, response.status);

        return responseBody;
    } catch (error) {
        console.error('Proxy error:', error);
        throw createError({
            statusCode: 502,
            statusMessage: 'Bad Gateway',
            message: 'Failed to proxy request to analytics endpoint',
        });
    }
});
