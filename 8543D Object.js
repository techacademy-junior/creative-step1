let rotators = [];
let palette = ["#72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"];

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();

  for (let i = 0; i < 50; i++) {
    rotators[i] = new Rotator();
  }
}

function draw() {
  background("#240046");

  for (let rotator of rotators) {
    rotator.draw();
  }
}

class Rotator {
  constructor() {
    this.size = random(width * 0.8, width);
    this.color = palette[int(random(palette.length))];
    this.rotX = 0;
    this.rotY = 0;
    this.rotZ = 0;
    this.speedX = random(1);
    this.speedY = random(1);
    this.speedZ = random(3);
  }

  draw() {
    stroke(this.color);
    push();
    rotateX(this.rotX += this.speedX);
    rotateY(this.rotY += this.speedY)
    rotateZ(this.rotZ += this.speedZ);
    arc(0, 0, this.size, this.size, 0, 180);
    pop();
  }
}