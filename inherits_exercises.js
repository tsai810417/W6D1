Function.prototype.inherits = function(BaseClass){
  function Surrogate() {}
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function(BaseClass){
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
};


// Asteroid.inherits(Ship);
function MovingObject (color) {
  this.color = color;
}

MovingObject.prototype.hello = function(){
  return `The color is ${this.color}`;
};

function Ship (color, x) {
  MovingObject.call(this, color);
  this.x = x;
}
Ship.inherits2(MovingObject);

function Asteroid (color, y) {
  MovingObject.call(this, color);
  this.y = y;
}
Asteroid.inherits2(MovingObject);

const move = new MovingObject('red');
const ship = new Ship('green', 1);
const asteroid = new Asteroid("black", 3);
