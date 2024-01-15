
<template>
  <canvas id="canvas1" ref="canvas1"></canvas>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
  import { RouterView } from 'vue-router'
  import Csmcl from './csmcl/classes/csmlc.js'
  import Victor from 'victor'

  export default {
    name: 'Csmcl.space',
    data() {
      return {
        particles: [],
      };
    },
    mounted() {
      this.initializeCanvas();
      this.csmclSpace = new Csmcl(this.canvas, this.ctx);           
      this.createParticles();
      this.animateParticles();

    },

    methods: {
      

      initializeCanvas() {
        this.canvas = this.$refs.canvas1;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        addEventListener('resize', () => {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
          this.csmclSpace.resize(this.canvas.width, this.canvas.height);
        });
      },
      handleMouseMovement() {
        this.mousePosition = new Victor(this.mouse.x, this.mouse.y);
       
        return this.mousePosition;        
      },

      createParticles() {
        for (let i = 0; i < 100; i++) {
          const position = new Victor(
            Math.random() * this.canvas.width,
            Math.random() * this.canvas.height
          );
          const velocity = new Victor(
            Math.random() * 2 - 1,
            Math.random() * 2 - 1
          );

          const radius = Math.random() * 5 + 1;
          const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;

          this.particles.push({ position, velocity, radius, color });
        }
        return this.particles;
      },     
      animateParticles() {
        requestAnimationFrame(this.animateParticles);
       

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const particle of this.particles) {
          particle.position.add(particle.velocity);
          if (
            particle.position.x + particle.radius > this.canvas.width ||
            particle.position.x - particle.radius < 0
          ) {
            particle.velocity.x *= -1;
          }

          if (
            particle.position.y + particle.radius > this.canvas.height ||
            particle.position.y - particle.radius < 0
          ) {
            particle.velocity.y *= -1;
          }

          this.ctx.beginPath();
          this.ctx.arc(
            particle.position.x,
            particle.position.y,
            particle.radius,
            0,
            Math.PI * 2
          );
          this.ctx.fillStyle = particle.color;
          this.ctx.fill();
          this.ctx.closePath();
        }
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
#canvas1 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 5px solid #000; 
  transform: translate(-50%, -50%);
  background: url('./assets/background1920x1080.png');
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease-in-out;
  z-index: -1;
}

.controls > button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  margin: 5px;
}
@media screen and (max-width: 900px) {
  #canvas1 {
    background: url('./assets/background1080x1920.png');
    background-size: cover;
    background-position: center;
    transition: all 0.5s ease-in-out;
  }
}
@media screen and (max-width: 500px) {
  #canvas1 {
    background: url('./assets/background1920x1080.png');
    background-size:cover;
    background-position: center;
    transition: all 0.5s ease;
  }
  
}
</style>