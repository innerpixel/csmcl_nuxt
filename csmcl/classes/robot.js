
export default class Robot {

    constructor(canvas, ctx) {
      // this is the Csmcl instance
      this.canvas = canvas
      this.ctx = ctx

      this.width = canvas.width
      this.height = canvas.height 
      this.drawRobot()
      // ... additional constructor logic


  
    }
    resize(width, height) {
      this.width = width
      this.height = height
      this.canvas.width = width
      this.canvas.height = height
            
    }
    
    updateRobot() {
      // ... update logic
    }
    drawRobot(canvas, ctx) {
      // draw robot image on canvas
      var img = new Image()
      img.src = '../../assets/images/robot.png'
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 100, 100)
      }


    } 




    // ... additional methods
  }
