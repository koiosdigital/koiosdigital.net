<template>
    <div class='md:grid-cols-2 grid-cols-1 grid gap-1'>
        <div class="h-full w-full flex items-center justify-center">
            <NuxtPicture src="/img/circuit-board-1.jpg" alt="Circuit Board" class="np-rnd" />
        </div>
        <ULandingHero title="We're here to help"
            description="Think of us as your engineering partner. We're here to help you bring your ideas to life."
            :links="[{ label: 'Our Services', icon: 'i-heroicons-wrench', size: 'lg', to: '/services' }]"
            orientation='vertical' />
    </div>
</template>