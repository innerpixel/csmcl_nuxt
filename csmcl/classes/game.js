// game/classes/Player.js
export default class Game {
  // this is the User instance
  // this = User instance
    constructor(canvas, ctx ) {
      // this is the Csmcl instance
      this.canvas = canvas
      this.ctx = ctx
      
      this.width = canvas.width
      this.height = canvas.height

      // ... and methods
      window.addEventListener('resize', (e) => {
        this.resize(e.target.innerWidth, window.target.innerHeight)
      })        
    }
    resize(width, height) {
      this.width = width
      this.height = height
      this.canvas.width = width
      this.canvas.height = height
            
    }
    render()  {
      // ... render logic

    }

    update(...args) {
      
      
    }
    render() {
      // ... render logic
    }

  
    // ... additional methods
  } // end class User

  