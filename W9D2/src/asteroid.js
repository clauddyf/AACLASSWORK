const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const defaultAsteroid = {color: getRandomColor(), radius: 20};

Util.inherits(Asteroid, MovingObject);
function Asteroid (options){
  this.pos = options.pos;
  // this.color = defaultAsteroid.color;
  this.color = getRandomColor();
  this.radius = defaultAsteroid.radius;
  this.vel = Util.randomVec(5);
  // MovingObject.call(this, {pos: this.pos, vel: this.vel, color: this.COLOR, radius: this.RADIUS});

};

module.exports = Asteroid;