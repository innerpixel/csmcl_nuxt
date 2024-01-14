
<template>
  <canvas id="canvas1" ref="canvas1"></canvas>

  <div class="nav">
    <div class="controls">
      <button id="resetDefaults"> R </button>
      <button id="fullScreen"> F </button>
  </div>
  
  </div>
</template>

<script>
  import Csmcl from './csmcl/classes/csmlc.js'
  
  export default {
    name: 'Csmcl.space',
    data() {
      return {
      }
    },  
    mounted () {
     
    },
    methods:{
    }

  } 
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
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
}
.nav {
  position: absolute;
  bottom: 10px;
  right: 10px;
    
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
@media screen and (max-width: 780px) {
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
    transition: all 0.5s ease-in-out;
  }
  
}
</style>