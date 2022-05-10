let noisePos = 0;
let noiseSpeed = 0.01;
let interval = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 10);
  stroke(0, 0, 0, 100)

  let scale = height / 2;

  for (let i = 0; i < width; i += interval) {

    let startX = i;
    let startY = height / 2 + map(noise(i + noisePos), 0, 1, -scale, scale);

    let endX = i + interval;
    let endY = height / 2 + map(noise(i + interval + noisePos), 0, 1, -scale, scale);

    line(startX, startY, endX, endY);
  }

  noisePos += noiseSpeed;
}