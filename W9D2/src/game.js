const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid= require("./asteroid.js");
const Ship= require("./ship.js");

function Game(){
  this.dimX = 1000;
  this.dimY = 600;
  this.numAsteroids = 5;
  this.asteroids = [];
  this.ship = new Ship(this.randomPosition());
};

Game.prototype.addAsteroids = function (){
  for (let i = 0; i < this.numAsteroids; i++) {
    this.asteroids.push(new Asteroid({ pos: this.randomPosition() }));
  }
};

Game.prototype.randomPosition = function () {
  return [Math.random() * this.dimX, Math.random() * this.dimY];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.dimX, this.dimY);
  for (let i = 0; i < this.allObjects().length; i++) {
    this.allObjects()[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.allObjects().length; i++) {
    for (let j = i + 1; j < this.allObjects().length; j++) {
      if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
        if(this.allObjects()[i] instanceof Ship){
          this.allObjects()[i].relocate();
        } else if (this.allObjects()[j] instanceof Ship){
          this.allObjects()[j].relocate();
        } 
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid){
  for (let i = 0; i < this.asteroids.length; i++) {
    if (this.asteroids[i] === asteroid){
      this.asteroids.splice(i,1);
    }
  }
};

Game.prototype.allObjects = function(){
  const result = [];
  for(let asteroid of this.asteroids){
    result.push(asteroid);
  }
  result.push(this.ship);
  return result; 
};

module.exports = Game;