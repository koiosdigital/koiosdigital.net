<template>
    <div class='md:grid-cols-2 grid-cols-1 grid'>
        <div class="h-full w-full" />
        <ULandingHero title="We Deliver"
            description="Think of us as your engineering partner. We're here to help you bring your ideas to life."
            :links="[{ label: 'Services', icon: 'i-heroicons-rocket-launch', size: 'lg', to: '/services' }]"
            orientation='vertical' />
    </div>
</template>