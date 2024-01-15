import victor from 'victor';
import tinycolor from 'tinycolor2';

// game/classes/Player.js
export default class Enemy {
  // this is the User instance
  // this = User instance
    constructor(game) {
      this.game = game ;
      this.x ; 
      this.y ;
      this.speedX ;
      this.speedY ;
      this.width = 50 ;
      this.height = 50 ;      
    }
    
    draw(...args) {
      // ... update logic
      this.x = args[0];
      this.y = args[1];
      this.speedX = args[2];
      this.speedY = args[3];
      this.width = args[4];
      this.height = args[5];
      this.game.context.fillStyle = 'red';
      this.game.context.fillRect(this.x, this.y, this.width, this.height);
     
    }
    

    // ... additional methods
    
  } // end class User

  