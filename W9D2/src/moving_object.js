function MovingObject(options) {
  this.pos = options.pos; 
  this.vel = options.vel; 
  this.radius = options.radius;
  this.color = options.color;
};

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1],this.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.fill();
  
};

MovingObject.prototype.move = function(){
  this.pos[0] = (this.pos[0] + Math.abs(this.vel[0])) % 1000;
  this.pos[1] = (this.pos[1] + Math.abs(this.vel[1])) % 600; 
};

MovingObject.prototype.isCollidedWith = function(otherObject){
  let dist = this.distance(otherObject);
  return (dist <= (this.radius + otherObject.radius));
}

MovingObject.prototype.distance = function(otherObject){
  let x1 = this.pos[0];
  let y1 = this.pos[1];
  let x2 = otherObject.pos[0];
  let y2 = otherObject.pos[1];
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2),2));
};

module.exports = MovingObject;