let palette = ["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"];
let bgColor;

function setup() {
  createCanvas(400, 400);
  strokeWeight(3);

  angleMode(DEGREES);

  bgColor = palette[int(random(palette.length))];

  drawingContext.shadowColor = color(0);
  drawingContext.shadowBlur = 1;

  background(bgColor);

  translate(width / 2, height);
  
  branch(70, 20);
}



function branch(length, angle) {
  let minLength = 5;
  if (length < minLength) return;

  stroke(palette[int(random(palette.length))]);
  line(0, 0, 0, -length);

  translate(0, -length);

  let ratio = 0.8;
  length *= ratio;

  push();
  rotate(angle);
  branch(length, angle);
  pop();

  push();
  rotate(-angle);
  branch(length, angle);
  pop();
}