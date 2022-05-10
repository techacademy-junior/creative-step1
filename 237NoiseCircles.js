let pallete = ["#f8ffe5", "#06d6a0", "#1b9aaa", "#ef476f", "#ffc43d"];

function setup() {

  createCanvas(400, 400);
  background(pallete[int(random(pallete.length))]);
  noStroke();

  for (let i = 0; i < 100; i++) {

    let colorNum = int(random(pallete.length));
    let color = pallete[colorNum];

    fill(red(color), green(color), blue(color), 190);
    stroke(red(color), green(color), blue(color), 240);

    let x = random(width);
    let y = random(height);
    let radius = random(100);
    let noisePos = random(10);

    drawNoiseCircle(x, y, radius, noisePos);

    fill(red(color), green(color), blue(color), 20);
    stroke(red(color), green(color), blue(color), 90);

    let shadowX = x + random(-10, 10);
    let shadowY = y + random(-10, 10);
    let shadowRadius = radius + 5;

    drawNoiseCircle(shadowX, shadowY, shadowRadius, noisePos);
  }
}

function drawNoiseCircle(x, y, radius, noisePos) {

  beginShape();

  let vertexNum = 36;
  for (let i = 0; i < vertexNum; i++) {

    let noiseVal = noise(noisePos);
    let scale = map(noiseVal, 0, 1, 0.5, 1.5);

    let radian = TWO_PI / vertexNum * i;

    let vertX = x + radius * sin(radian) * scale;
    let vertY = y + radius * cos(radian) * scale;

    curveVertex(vertX, vertY);

    noisePos += 0.1;
  }

  endShape(CLOSE);
}