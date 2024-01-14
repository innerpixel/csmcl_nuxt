// Purpose: Define the Csmcl class
export default class Csmcl {
    constructor(canvas) {
      this.canvas = canvas
      this.width = canvas.width
      this.height = canvas.height

      // ... and methods
      window.addEventListener('resize', (e) => {
        console.log(e)
        this.resize(e.target.innerWidth, window.target.innerHeight)
      })        
    }
    resize(width, height) {
      this.canvas.width = width
      this.canvas.height = height
      this.width = width
      this.height = height
    }
    update() {
      // ... update logic
    }
    // ... additional methods
  }
