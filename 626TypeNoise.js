let font;
let fontSize = 150;
let textString = 'Hello';

let noiseX = 0;
let noiseY = 0;

function preload() {
  font = loadFont('MPLUS1p-Regular.otf');
}

function setup() {
  createCanvas(400, 400);
  textFont(font);
  textSize(fontSize);
  fill("#f6f7f8");
  stroke("#20a4f3");
  strokeWeight(2);
}

function draw() {
  background("#2ec4b6");

  let x = 0;
  let y = height;
  let bounds = font.textBounds(textString, x, y, fontSize);
  let points = font.textToPoints(textString, x, y, fontSize);

  translate(-bounds.x, height - (bounds.y + bounds.h));
  translate((width - bounds.w) / 2, -(height - bounds.h) / 2);

  noiseX += 0.01;
  noiseY += 0.02;

  for (let i = 0; i < points.length; i++) {

    let noiseXval = map(noise(noiseX + i / 10), 0, 1, -10, 10);
    let noiseYval = map(noise(noiseY + i / 10), 0, 1, -10, 10);

    ellipse(points[i].x + noiseXval, points[i].y + noiseYval, 6);
  }
}