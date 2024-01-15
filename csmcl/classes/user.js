import victor from 'victor' ; 
import tinycolor from 'tinycolor2';

// game/classes/Player.js
export default class User {
  // this is the User instance
  // this = User instance
    constructor(csmcl) {
      this.space = csmcl ; 

      this.name = 'Cosmical name ';
      this.email = 'yourcosmical@cosmical.me';
      this.password = 'one time password'; 
      this.loc = new victor(10,10) ;
      this.xy = new victor(10,10) ;
      this.speed = new victor(0.01,0.01) ;  // speed in pixels per frame
      this.width = 50 ;
      this.height = 50 ;
      this.color = tinycolor.random().toString();
    }
    init() {
    
    }

    update() {

      
    }
    draw() {
      // ... draw user logic
      this.csmcl.context.fillStyle = this.color;
      this.csmcl.context.fillRect(this.x, this.y, this.width, this.height);   

      // ... render logic
    }

  
    // ... additional methods
  } // end class User

  