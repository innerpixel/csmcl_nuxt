
<template>
  <div class="hidden">
    <img src="~/assets/images/robot.png" alt="robot" id="robot" />
  </div>
  <canvas id="canvas2"></canvas>
  <!-- // display mouse info  -->
  <div class="mouseinfo2"></div>
  
</template> 

<script>
  
  import Robot from '../csmcl/classes/robot.js'
  import victor from 'victor'

  export default {
    name: 'Navigation',
    data() {
      return {
        
      };
    },
    mounted() {
      this.init()
      this.mouseinfo2 = document.querySelector('.mouseinfo2');
      this.mouse = new victor(0, 0);
      
      window.addEventListener('mousemove', (e)=> {
        this.mouse = new victor(e.clientX, e.clientY);
        this.dx = this.mouse.x - this.robot.loc.x;
        this.dy = this.mouse.y - this.robot.loc.y;
        this.robot.angle = Math.atan2(this.dy, this.dx);
        this.robot.updateRobot();
      });
      

    },

    methods: {
      init() {
        this.canvas = document.getElementById('canvas2'); 
        this.ctx = this.canvas.getContext('2d');

        this.robot = new Robot(this.canvas, this.ctx);
      
        this.robot.drawRobot(this.canvas, this.ctx);
        this.robot.updateRobot();      
      },
      animateRobot() {
        this.dx = this.mouse.x - this.robot.loc.x;
        this.dy = this.mouse.y - this.robot.loc.y;
        this.robot.updateRobot();
        requestAnimationFrame(this.animateRobot);
      },  
    },
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
/* landscape +900 px >  */
#canvas2 {
  border : 15px dashed  rgba(0, 0, 0, 0.082); 
  border-radius: 50%;
  /* // add shoadow  */
  
}


</style>