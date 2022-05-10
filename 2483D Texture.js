let size = 100;
let img;
let url = "https://loremflickr.com/300/300";
let pg;

function preload() {
  img = loadImage(url);
}

function setup() {
  createCanvas(400, 400, WEBGL);

  pg = createGraphics(100, 100);
  pg.background("#8e9aaf");
  pg.noStroke();
  pg.fill("#264653");
  pg.ellipse(pg.width / 2, pg.height / 2, 50);
}

function draw() {
  background("#cbc0d3");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  texture(img);

  push();
  translate(-size, 0);
  box(size);
  pop();

  texture(pg);
  
  push();
  translate(size, 0);
  box(size);
  pop();
}