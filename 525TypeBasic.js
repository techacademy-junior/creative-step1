let font;
let fontSize = 150;
let textString = 'Hello';

function preload() {
  font = loadFont('MPLUS1p-Regular.otf');
}

function setup() {
  createCanvas(400, 400);
  background(220);

  textFont(font);
  textSize(fontSize);
  noFill();

  centerLine();

  let x = 0;
  let y = height;
  let bounds = font.textBounds(textString, x, y, fontSize);
  let points = font.textToPoints(textString, x, y, fontSize);

  translate(-bounds.x, height - (bounds.y + bounds.h));
  translate((width - bounds.w) / 2, -(height - bounds.h) / 2);

  rect(bounds.x, bounds.y, bounds.w, bounds.h);

  for (let p of points) {
    ellipse(p.x, p.y, 5);
  }
}

function centerLine() {
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
}