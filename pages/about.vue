<template>
    <UContainer>

        <UPageBody class="wysiwig space-y-6 max-w-3xl mx-auto">
            <UPageHeader title="About Us" />
            <p>
                At Koios Digital, we are pioneers in engineering and manufacturing, driven by a passion for innovation
                and a
                commitment to excellence. Founded on the principle of pushing boundaries, we strive to redefine industry
                standards and create solutions that shape the future. Engineering isn't simply our vocation, it is our
                way of life.
            </p>
            <p>
                Our team is comprised of seasoned professionals and fresh talent, united by a shared vision of
                transforming ideas into reality. With expertise spanning mechanical, electrical, and software
                engineering, we possess the versatility to tackle diverse challenges and deliver cutting-edge solutions.
            </p>
            <div>
                <NuxtPicture src="/img/circuit-board-1.jpg" class="pic" />
            </div>
            <p>
                In our state-of-the-art facilities, we combine traditional craftsmanship with advanced technologies. We
                leverage the latest in automation, robotics, and digital manufacturing to produce goods of the finest
                quality with the highest efficiency. When combined with our uncompromising eye for quality assurance and
                control this results in reduced timelines on projects with better results than competitors.
            </p>
            <UButton to="/services" color="brand" icon="i-heroicons-wrench" size="xl">Our Services</UButton>
            <p>
                At the heart of our operations lies a relentless pursuit of innovation. We thrive on pushing boundaries,
                exploring new frontiers, and pioneering breakthroughs that revolutionize industries. Whether it's
                developing sustainable energy solutions, optimizing manufacturing processes, or designing
                next-generation products, we are driven by a spirit of creativity and ingenuity.
            </p>
            <div>
                <NuxtPicture src="/img/laptop.jpg" class="pic" />
            </div>
            <p>
                At Koios Digital, we understand that success is not just about what we create, but how we create it.
                That's
                why we prioritize collaboration, integrity, and customer satisfaction in everything we do. We partner
                closely with our clients, understanding their unique needs and challenges to deliver tailored solutions
                that exceed expectations.
            </p>
        </UPageBody>
    </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'About - Koios Digital',
    description: 'Composed of creative designers and motivated entrepreneurs, our team loves creating products that solve real problems and make life better for people.',
});
</script>

<style lang="scss">
.wysiwig {
    @apply antialiased;

    h1 {
        @apply text-4xl font-bold;
    }

    h2 {
        @apply text-3xl font-bold;
    }

    h3 {
        @apply text-2xl font-bold;
    }

    h4 {
        @apply text-xl font-bold;
    }

    p {
        @apply text-xl;
    }
}

.pic {
    img {
        @apply mx-auto rounded-lg w-full;
    }
}
</style>