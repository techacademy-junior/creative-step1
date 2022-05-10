let pallete = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"];

function setup() {

  createCanvas(400, 400);
  angleMode(DEGREES)
  background(pallete[int(random(pallete.length))]);

  for (let i = 0; i < 3; i++) {
    drawHeartShaped(width / 2, height / 2, i * 5);
  }
}

function getHeartX(degree) {
  return 16 * pow(sin(degree), 3);
}

function getHeartY(degree) {
  return (-1) * (13 * cos(degree) - 5 * cos(2 * degree) - 2 * cos(3 * degree) - cos(4 * degree));
}

function drawHeartShaped(x, y, scale) {

  for (let i = 0; i < 360; i += 5) {

    let heartX = getHeartX(i) * scale + x;
    let heartY = getHeartY(i) * scale + y;
    
    stroke(pallete[int(random(pallete.length))]);
    fill(pallete[int(random(pallete.length))]);
    
    drawHeart(heartX, heartY, pow(sin(i), 2));
  }
}

function drawHeart(x, y, scale) {

  beginShape();

  for (let i = 0; i < 360; i++) {

    let vertX = getHeartX(i) * scale + x;
    let vertY = getHeartY(i) * scale + y;

    vertex(vertX, vertY);
  }

  endShape(CLOSE);
}