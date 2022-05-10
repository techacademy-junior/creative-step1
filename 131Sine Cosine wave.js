let pallete = ["#0081a7", "#00afb9", "#fdfcdc", "#fed9b7", "#f07167"];

function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
  background("#f0efeb");

  stroke(pallete[int(random(pallete.length))]);

  drawSine(height / 4);
  drawCosine(height / 4 * 3);
}

function drawSine(y) {
  let radian = 0;
  let step = TWO_PI / width;
  let scale = height / 4 - 10;

  stroke(pallete[int(random(pallete.length))]);
  line(0, y, width, y);

  for (let i = 0; i < width; i++) {
    stroke(pallete[int(random(pallete.length))]);
    let startY = y + sin(radian) * scale;
    let endY = y + sin(radian + step) * scale;
    line(i, startY, i + 1, endY);
    radian += step;
  }
}

function drawCosine(y) {
  let radian = 0;
  let step = TWO_PI / width;
  let scale = height / 4 - 10;

  stroke(pallete[int(random(pallete.length))]);
  line(0, y, width, y);

  for (let i = 0; i < width; i++) {
    stroke(pallete[int(random(pallete.length))]);
    let startY = y + cos(radian) * scale;
    let endY = y + cos(radian + step) * scale
    line(i, startY, i + 1, endY);
    radian += step;
  }
}