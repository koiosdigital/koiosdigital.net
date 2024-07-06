import type { Config } from 'tailwindcss'

export default {
  content: [
    'pages/**.vue',
    'components/**.vue',
    'layouts/**.vue',
    'plugins/**.ts',
    './formkit.theme.ts',
  ],
  plugins: [],
} satisfies Config
