let pallete = ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#ffba08"];

function setup() {
  createCanvas(400, 400);
  background("#fefae0");
  noStroke();

  for (let i = 0; i < 12; i++) {

    fill(pallete[int(random(pallete.length))]);

    let vertexNum = i * 4 + 10;
    let radius = i * 25;

    drawDotCircle(width / 2, height / 2, vertexNum, radius, 20);
  }
}

function drawDotCircle(x, y, vertexNum, radius, dotSize) {

  for (let i = 0; i < vertexNum; i++) {

    let radian = TWO_PI / vertexNum * i;
    
    let dotX = x + radius * sin(radian);
    let dotY = y + radius * cos(radian);
    
    circle(dotX, dotY, dotSize);
  }
}