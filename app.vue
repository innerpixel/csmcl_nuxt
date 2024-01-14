<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import victor from 'victor' ;
import tinycolor from 'tinycolor2' ;

class Point {
  // use victor to create a class points
  constructor (...props) {
    this.loc = new victor(Math.random() * window.innerWidth, Math.random() * window.innerHeight) // location
    this.vel = new victor((Math.random() * 2 - 1 ), (Math.random() * 2 - 1)) // velocity used to calculate the location of the point
    this.acc = new victor(50, 50) // acceleration used to calculate the velocity and location of the point 
    this.target = new victor(Math.random() * window.innerWidth, Math.random() * window.innerHeight) // target location  used to calculate the acceleration of the point    
    this.maxSpeed = 10 // max speed in any direction unit is pixels per second
    this.color = tinycolor.random().toHexString()
    this.radius = 35  // radius of the point
    this.size = 25 // size of the point
    this.state = this.state('default').state // state of the point default is default
    this.mood = this.moods('active').mood // mood of the point default is bounce 
    
  }
  state = (state) => {
    // state or random state, list of states
    const states = ['active', 'inactive', 'pinned', 'selected','random']
    state = state || states[Math.floor(Math.random() * states.length)]
    
    return { state,states }
  }

  moods = (mood) => {
    // mood or random mood, list of moods
    const moods = ['bounce', 'attract', 'repel', 'implode','explode', 'random']    
    mood = mood || moods[Math.floor(Math.random() * moods.length)]

    return { mood,moods }
  }
} // end of class point
    
export default {
 
  mounted () {
    this.$nextTick(() => {
      this.initCanvas()
      this.addEventListeners()
      this.initGame().update().animate()

      
    })
  },
  methods: {
    initGame () {
      this.points = []
      this.numOfPoints = 50
      this.lineSize = 200
      this.effects = ['connected']

      for (let i = 0; i < this.numOfPoints ; i++) {
        this.points.push(new Point())
      }
      return this
    }, // end of initGame

    initCanvas () {
      // configure absolute width and height
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')      
      
      this.canvas = canvas
      this.ctx = ctx 
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      return this
    },
    addEventListeners () {
      // add resize event listener resize this.canvas
      window.addEventListener('resize', () => {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.initGame().update().animate()
      })
    },    /// end of addEventListeners      

    setRules() {
     // bounce off the walls
      this.points.forEach(point => {
        if (point.loc.x > window.innerWidth - point.radius) {
          point.vel.x *= -1
          point.loc.x = window.innerWidth - point.radius - 2.5
        }
        if (point.loc.x < point.radius) {
          point.vel.x *= -1
          point.loc.x = point.radius
        }
        if (point.loc.y > window.innerHeight - point.radius) {
          point.vel.y *= -1
          point.loc.y = window.innerHeight - point.radius - 2.5
        }
        if (point.loc.y < point.radius) {
          point.vel.y *= -1
          point.loc.y = point.radius
        }
      }) // end of forEach
      
      return this
    }, // end of setRules
    
    update () {      
      this.setRules()   
      this.points.forEach(point => {
        // if the point is selected then set the location to the mouse location
          point.state === 'active'
          point.acc = point.target.clone().subtract(point.loc).normalize().multiply(new victor(0.001, 0.001)) // calculate the acceleration
          point.vel.add(point.acc) // add acceleration to velocity
          point.vel.limit(point.maxSpeed, point.maxSpeed) // limit the velocity to maxSpeed
          point.loc.add(point.vel) // add velocity to location
        
      })  // end of forEach
      return this
    }, 
    // check collision between points and change both points velocity
    checkCollision () {
      this.points.forEach(point => {
        this.points.forEach(otherPoint => {
          if (point.loc.distance(otherPoint.loc) < point.radius + otherPoint.radius + 2.1) {
            const temp = point.vel.clone()
            point.vel = otherPoint.vel.clone()
            otherPoint.vel = temp
            // change target to random location
            point.target = new victor(Math.random() * window.innerWidth, Math.random() * window.innerHeight)
          }
        })
      })
      return this
    }, // end of checkCollision
    connectPoints (ctx = this.ctx) {
          
      // line between 200 and 300 pixels
      const lineSize = this.lineSize
      this.points.forEach(point => {
        this.points.forEach(otherPoint => {
          if (point.loc.distance(otherPoint.loc) < this.lineSize) {
            ctx.beginPath()
            ctx.moveTo(point.loc.x, point.loc.y)
            ctx.lineTo(otherPoint.loc.x, otherPoint.loc.y)
            // calculate hue 
            const hue = Math.floor(point.loc.distance(otherPoint.loc) / lineSize * 360)
            ctx.strokeStyle = tinycolor({h: hue, s: 100, l: 50}).toHexString()
            ctx.lineWidth = 1.2
            ctx.stroke()
            ctx.closePath()
          }
        })
      }) ; // end of forEach
      return this
    }, // end of connectPoints

    drawPoints () {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)      
      // if array this.effects contains 'connected' then connect the points
      if (this.effects.includes('connected')) {
        this.connectPoints()
      }

        this.points.forEach(point => {
          ctx.beginPath()
          ctx.arc(point.loc.x, point.loc.y, point.radius , 0, Math.PI * 2)        
          ctx.fillStyle = tinycolor(point.color).toHexString()
          ctx.fill()
          ctx.closePath()
        })        
        return this
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.update().drawPoints()
    },

  } // end of methods
} // end of export default  
 
</script>
<style>
* { 
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
body {
  background-color: #000;
  overflow: hidden;
}
canvas {
  width: 100%;
  height: 100%;
  background-color: #000;}
</style>