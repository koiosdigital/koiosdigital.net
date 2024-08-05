<template>
    <div class='md:grid-cols-2 grid-cols-1 grid'>
        <ULandingHero title="Engineering the future"
            description="We're designers and entrepreneurs who are passionate about creating products to solve real-world problems and make a difference in people's lives."
            :links="[{ label: 'Get Started', icon: 'i-heroicons-rocket-launch', size: 'lg', to: '/contact' }, {
                label: 'Learn More',
                icon: 'i-heroicons-book-open',
                size: 'lg',
                color: 'gray',
                to: '/about'
            }]" orientation='vertical' />
        <div class="h-full w-full hidden md:block">
            <Traces :font-controlled="false" />
        </div>
    </div>
</template>

<script lang="ts" setup>
//@ts-expect-error - Ignore this error
import Traces from '@/assets/traces.svg';
</script>

<style lang="css">
path[data-trace='y'] {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: drawLine 5s ease-in-out forwards
}

@keyframes drawLine {
    to {
        stroke-dashoffset: 0
    }
}
</style>