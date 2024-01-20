import victor from 'victor'

export default class Robot {

    constructor(canvas, ctx) {
        canvas.width = 600
        canvas.height = 600    
        
        this.canvas = canvas
        this.ctx = ctx
        this.radius = 65
        this.angle = 0

        this.mouse = new victor(useMouse().x , useMouse().y)
        this.loc = new victor(this.canvas.width / 2 - this.radius, this.canvas.height / 2 - this.radius)
      
      this.drawRobot()
    }
    drawRobot(canvas, ctx) {
      this.bodyrobot = new Image()
      this.bodyrobot.src = 'http://localhost:3000/_nuxt/assets/images/robot.png'

      this.bodyrobot.onload = () => {
        this.ctx.drawImage(this.bodyrobot, this.loc.x, this.loc.y, 200, 203)
        
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'rgba(183, 0, 255, 0.290)'
        this.ctx.lineWidth = 10
        this.ctx.arc(this.loc.x + 65, this.loc.y + 129, 42, 0, 2 * Math.PI)

        this.ctx.stroke()
  
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'purple'
        this.ctx.fillStyle = 'purple'
        this.ctx.arc(this.loc.x + 65, this.loc.y + 129, 25, 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
  
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'black'
        this.ctx.fillStyle = 'green'
        this.ctx.arc(this.loc.x + 65, this.loc.y + 129, 12, 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()
      
      }
    }
    updateRobot() {
      // ... update robot
     
      
    }

    animateRobot() {
      // ... animate robot
      this.updateRobot()
      this.drawRobot()
      requestAnimationFrame(this.animateRobot.bind(this) )
    }







    // ... additional methods
  }
