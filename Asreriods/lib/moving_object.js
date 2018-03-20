function MovingObject (){
  let result = Array.from(arguments);
  console.log(result);
  this.pos = result[0]["pos"];
  this.vel = result[0]["vel"];
  this.radius = result[0]["radius"];
  this.color = result[0]["color"];
}

MovingObject.prototype.draw = function (ctx) {

  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] = this.pos[0] + this.vel[0];
  this.pos[1] = this.pos[1] + this.vel[1];
};

module.exports = MovingObject;
