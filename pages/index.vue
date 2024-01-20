<template>
    <div class="container ">
        <div class="title font-black text-8xl text-amber-600">csmcl space</div>
        <div class="cta text-violet-950" > COSMICAL _YOU_ @ COSMICAL _ ME _ </div>
      <!-- control station : robot  where are you: robot  -->
      <Navigation />
      <div class="mouseinfo"></div>
    </div>
</template>

<script>
  import Navigation from '~/components/navigation.vue'
  import victor from 'victor'
  


  export default {
    components: {
      Navigation
    },
    setup() {
     
    },
    mounted() {
      this.mouseinfo = document.querySelector('.mouseinfo');
      
      window.addEventListener('mousemove', (e)=> {
        this.mouse = new victor(e.clientX, e.clientY);
        this.mouseinfo.innerHTML = `mouse x: ${this.mouse.x} mouse y: ${this.mouse.y}`;
      
      // this is the mouse position in the canvas 
    });
      
    },
    methods: {
      
    }
  }

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