const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

window.mo = mo;
