let palette = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
let div = 20;
let yOff = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(palette[0]);
  
  rotateX(60);

  translate(-width / 2, -height / 2);

  let size = width / div;
  translate(size / 2, size / 2);

  let scale = 150;
  for (let y = 0; y < div; y++) {

    for (let x = 0; x < div; x++) {
      push();
      let noiseX = x * 0.1;
      let noiseY = y * 0.1 + yOff;
      let noiseVal = noise(noiseX, noiseY) * scale;
      
      translate(x * size, y * size, noiseVal);
      fill(palette[x % palette.length]);
      box(size / 2);
      pop();
    }
  }
  yOff += 0.01;
}