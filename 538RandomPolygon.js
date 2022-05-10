let pallete = ["#70d6ff", "#ff70a6", "#ff9770", "#ffd670", "#e9ff70"];

function setup() {
  createCanvas(400, 400);

  let color = pallete[int(random(pallete.length))];
  background(color);

  noFill();

  for (let i = 0; i < 100; i++) {
    let color = pallete[int(random(pallete.length))];
    stroke(color);

    drawPolygon(width / 2, height / 2, round(random(3, 5)), random(0, 300));
  }
}


function drawPolygon(x, y, vertexNum, radius) {

  beginShape();

  for (let i = 0; i < vertexNum; i++) {
    let radian = TWO_PI / vertexNum * i;
    let vertX = x + radius * sin(radian);
    let vertY = y + radius * cos(radian);
    
    vertex(vertX, vertY);
  }

  endShape(CLOSE);
}