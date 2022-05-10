let url = "https://loremflickr.com/400/400";
let img;

function preload() {
  img = loadImage(url);
}

function setup() {
  createCanvas(400, 400);
  stroke(0);
  strokeWeight(2);
  textAlign(CENTER);
}

function draw() {
  image(img, 0, 0, width, height);

  drawColorAnalyzer(img, mouseX, mouseY);
}

function drawColorAnalyzer(img, x, y) {
  let color = img.get(x, y);
  fill(red(color), green(color), blue(color), 220);
  circle(x, y, 100);

  fill(255);
  text(color, x, y);
}