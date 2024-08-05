<script setup lang="ts">
import { AcademicCapIcon, BoltIcon, CogIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/vue/16/solid';
</script>

<template>
    <div class="flex flex-col md:flex-row justify-between sm:text-xl py-20 gap-6 dark:text-neutral-400">
        <div class="flex items-center gap-3">
            <CpuChipIcon class="w-6 h-6" />
            <span>PCB Design</span>
        </div>
        <div class="flex items-center gap-3">
            <BoltIcon class="w-6 h-6" />
            <span>Electrical Engineering</span>
        </div>
        <div class="flex items-center gap-3">
            <CommandLineIcon class="w-6 h-6" />
            <span>Software Engineering</span>
        </div>
        <div class="flex items-center gap-3">
            <CogIcon class="w-6 h-6" />
            <span>Manufacturing</span>
        </div>
        <div class="flex items-center gap-3">
            <AcademicCapIcon class="w-6 h-6" />
            <span>Education</span>
        </div>
    </div>
</template>