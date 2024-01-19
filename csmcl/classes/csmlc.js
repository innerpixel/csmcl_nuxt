// Purpose: Csmcl class
// create users game 
// handles user interactions within game
// update csmcl.network with user and game data

export default class Csmcl {
    constructor(canvas) {
      // this is the Csmcl instance
      this.canvas = canvas
      this.width = canvas.width
      this.height = canvas.height

      // ... and methods
      window.addEventListener('resize', (e) => {
        this.resize(e.target.innerWidth, e.target.innerHeight)
      })        

    }
    resize(width, height) {
      this.width = width
      this.height = height
      this.canvas.width = width
      this.canvas.height = height
            
    }
    
    update() {
      // ... update logic
    }
    render() {
      // ... render logic
    } 


    // ... additional methods
  }
