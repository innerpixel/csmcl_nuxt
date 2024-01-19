<template>  
  <div class="container">
	  <div class="avatar">
		  <canvas ref="canvas2"></canvas>
		</div>
	</div>
</template>

<script>	
	import Robot from '../csmcl/classes/robot'
	import Victor from 'victor'

	export default {
		name: 'navCntrols',
		data() {
			return {
				Robot	
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
				this.canvas = this.$refs.canvas2;
				this.ctx = this.canvas.getContext('2d');
				// draw 3 ciurcles 
				
			},
			handleMouseMovement() {
			},

			createRobot() {
				this.robot =- new Robot 

			},

			animateRobot() {
				
			},
		},
	};
</script>
<style>
	
	.avatar {
		position: absolute  ;
		bottom: 25px;
		
		width: 350px;
		height: 350px;
		box-sizing: border-box;
		border: 5px transparent solid;  
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 5px 25px 0px rgba(0,0,0,0.6);
		transform: translatex(0px);
		animation: float 5.75s ease-in-out infinite;		
	}

	#canvas2	{
		z-index: +10;
		background: url('./assets/avatar.png');
	}

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
 
</style>
