
<template>
  
  <canvas id="canvas2"></canvas>
  
</template> 

<script>
  
  import Robot from '../csmcl/classes/robot.js'

  import Victor from 'victor'

  export default {
    name: 'Navigation Controls',
    data() {
      return {
        
      };
    },
    mounted() {
      this.canvas = document.getElementById('canvas2'); 
      this.ctx = this.canvas.getContext('2d');
      
      this.canvas.width = 80;
      this.canvas.height = 80;
      this.robot = new Robot(this.canvas, this.ctx);
      
      this.robot.drawRobot();
      this.robot.updateRobot();
      

    },

    methods: {
      animateRobot() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.robot.drawRobot();
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
  position: absolute;
  width: 280px;
  height: 280px;

  border : 1px solid black;
  border-radius: 50%;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -0%);
  /* background: url('../assets/images/robot.png');
  background-size:auto 80% ;
  background-repeat: no-repeat;
  background-position: center; */
  /* // rounded border  */
  
  
  
  
/* 
  transition: all 0.5s ease-in-out; */
}

</style>