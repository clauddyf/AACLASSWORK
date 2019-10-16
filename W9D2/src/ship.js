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

Util.inherits(Ship, MovingObject);
const defaultShip = { color: getRandomColor(), radius: 10 };

function Ship(pos) {
  this.pos = pos; 
  this.color = getRandomColor();
  this.radius = defaultShip.radius;
  this.vel = [0,0];
}
Ship.prototype.randomPos= function () {
  return [Math.random() * 600, Math.random() * 400];
};

Ship.prototype.relocate = function(){
  this.pos = this.randomPos();
};

Ship.prototype.power = function(impulse) {
  
}

module.exports = Ship;