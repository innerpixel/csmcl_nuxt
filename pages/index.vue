<template>
    <div class="container ">
        <div class="title font-black text-8xl text-amber-600">csmcl space</div>
        <div class="cta text-amber-700  " >move to get cosmical credits</div>
        
      <NavControls />

    </div>
</template>

<script>
import navControls from '../components/navControls.vue'
import { useMagicKeys } from '@vueuse/core'


const { shift, space, a /* keys you want to monitor */ } = useMagicKeys()

watch(space, (v) => {
  if (v)
    console.log('space has been pressed')
})

watchEffect(() => {
  if (shift.value && a.value)
    console.log('Shift + A have been pressed')
})
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

</style>