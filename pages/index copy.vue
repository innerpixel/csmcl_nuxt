<template>
    <div class="container w-screen h-screen flex flex-col items-center justify-center ">
        <div class="title font-black text-8xl text-amber-600">csmcl space</div>
        <div class="cta text-amber-700  " > move to get cosmical credits</div>
    </div>
</template>
<script setup>
import { useParallax } from '@vueuse/core'

const container = ref(null)
const { tilt, roll, source } = useParallax(container)
</script>