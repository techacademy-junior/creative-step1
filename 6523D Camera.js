let cam;

function setup() {
  createCanvas(400, 400, WEBGL);
  cam = createCamera();
}

function draw() {
  let camY = map(mouseY, 0, height, -100, 100);
  let camX = map(mouseX, 0, width, -100, 100);
  let camZ = 500;
  cam.setPosition(camX,camY,camZ);

  fill(255, 0, 0);

  background("#a8dadc");

  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);

  drawBoxs();
}

function drawBoxs() {
  let size = 100;
  let palette = ["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"];
  
  fill(palette[0]);
  box(size);

  push();
  translate(-size, -size);
  fill(palette[1]);
  box(size);
  pop();

  push();
  translate(size, -size);
  fill(palette[2]);
  box(size);
  pop();

  push();
  translate(-size, size);
  fill(palette[3]);
  box(size);
  pop();

  push();
  translate(size, size);
  fill(palette[4]);
  box(size);
  pop();
}