<template>
    <div class='md:grid-cols-2 grid-cols-1 grid'>
        <UPageHero title="From Silicon to Cloud"
            description="Firmware, hardware, cloud, and web. One team that covers the whole stack so you don't have to manage five vendors to ship one product."
            :links="[{ label: 'Start a Project', icon: 'i-heroicons-rocket-launch', size: 'lg', to: '/contact' }, {
                label: 'Our Services',
                icon: 'i-heroicons-wrench-screwdriver',
                size: 'lg',
                color: 'neutral',
                variant: 'subtle',
                to: '/services'
            }]" orientation='vertical' />
        <div class="h-full w-full hidden md:block">
            <Traces :font-controlled="false" />
        </div>
    </div>
</template>

<script lang="ts" setup>
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