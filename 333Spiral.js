let pallete = ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#ffba08"];
let pallete2 = ["#f8ffe5", "#06d6a0", "#1b9aaa", "#ef476f", "#ffc43d"];

function setup() {
  createCanvas(400, 400);
  noFill();

  let bgColor = pallete[int(random(pallete.length))];
  background(bgColor);

  let lineColor;
  do {
    lineColor = pallete[int(random(pallete.length))];
  } while (lineColor == bgColor);

  strokeWeight(3);
  drawSpiralwithRandomCircle(width / 2, height / 2, lineColor,pallete2);
}

function drawSpiralwithRandomCircle(x, y, lineColor,circlePallete) {

  let radius = 10;
  let raiusStep = 0.1;
  let vertexNum = 360;

  for (let i = 0; i < vertexNum * 8; i++) {

    let startRadian = TWO_PI / vertexNum * i;
    let endRadian = TWO_PI / vertexNum * (i + 1);

    let startX = x + radius * sin(startRadian);
    let startY = y + radius * cos(startRadian);

    let endX = x + (radius + raiusStep) * sin(endRadian);
    let endY = y + (radius + raiusStep) * cos(endRadian);

    stroke(lineColor)
    line(startX, startY, endX, endY);
    radius += raiusStep;

    if (int(random(50)) == 0) {
      stroke(circlePallete[int(random(circlePallete.length))]);
      ellipse(startX, startY, random(20, 40));
    }
  }
}