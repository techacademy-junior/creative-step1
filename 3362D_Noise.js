let noiseX = 0;
let noiseY = 0;
let noiseStep = 0.05;
let rectSize = 4;
let yNoiseOffset = 0;

function setup() {

  createCanvas(400, 400);
  noStroke();
}

function draw() {

  noiseY = yNoiseOffset;

  for (let y = 0; y < height; y += rectSize) {

    noiseY += noiseStep;
    noiseX = 0;

    for (let x = 0; x < width; x += rectSize) {

      noiseX += noiseStep;

      let red = noise(noiseX, noiseY) * 255;
      let green = noise(noiseX, noiseY) * 255;
      
      fill(red, green, 255);
      rect(x, y, x + rectSize, y + rectSize);
    }
  }

  yNoiseOffset += 0.002;
}