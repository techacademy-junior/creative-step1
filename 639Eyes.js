let diameter = 100;

function setup() {
  
  createCanvas(400, 400);
  background(255, 152, 10);
  noStroke();
}

function draw() {

  for (let y = diameter / 2; y < height; y += diameter) {

    for (let x = diameter / 2; x < width; x += diameter) {
      
      drawEye(x, y, diameter);
    }
  }
}

function drawEye(x, y, diameter) {
  
  fill(255);
  ellipse(x, y, diameter);

  let radian = atan2(mouseY - y, mouseX - x);
  let d = dist(x, y, mouseX, mouseY);

  if (d > diameter / 4) {
    d = diameter / 4;
  }
  fill(0, 100, 255);
  ellipse(x + cos(radian) * d, y + sin(radian) * d, diameter / 2);
}