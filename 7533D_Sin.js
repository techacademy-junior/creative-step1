let palette = ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"];
let num = 100;
let y = [];
let rotX = [];
let rotY = [];
let rotZ = [];

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);

  for (let i = 0; i < num; i++) {
    y[i] = i;
    rotX[i] = random(360);
    rotY[i] = random(360);
    rotZ[i] = random(360);
  }
}

function draw() {
  background(palette[0]);

  for (let i = 0; i < num; i++) {
    rotateX(rotX[i]);
    rotateY(rotY[i]);
    rotateZ(rotZ[i]);

    push();
    let scale = height / 2;
    let posY = sin(y[i]) * scale;
    translate(0, posY);

    fill(palette[i % palette.length]);

    let size = 10;
    box(size);
    pop();

    let speed = 1.5;
    y[i] += speed;
  }
}