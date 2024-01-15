
import type { _bottom } from '#tailwind-config/theme/backgroundPosition';
<template>  
  <div class="container">
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/u/1004701?s=460&u=8b9b2b2e9b5b6b5b6b5b6b5b6b5b6b5b6b5b6b5&v=4" alt="avatar" />
      </div>

    
  </div>
</template>

<style>
@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.9);
		transform: translatex(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translate(-20px);
    
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.9);
		transform: translate(0px);
		
	}
}

@keyframes float2 {

  0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.9);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 55px 15px 0px rgba(0,0,0,0.2);
		transform: translate(-40px);
    
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.9);
		transform: translate(0px);
		
	}
}


.container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.avatar {
  position: absolute  ;
  bottom: 25px;
  
  width: 150px;
	height: 150px;
	box-sizing: border-box;
	border: 5px transparent solid;  
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 0 5px 25px 0px rgba(0,0,0,0.6);
	transform: translatex(0px);
	animation: float 5.75s ease-in-out infinite;
	
	
}
 
</style>
