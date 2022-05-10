let palette = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let div = 10;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(palette[0]);

  translate(-width / 2, -height / 2);

  let size = width / div;
  translate(size / 2, size / 2);

  for (let y = 0; y < div; y++) {

    for (let x = 0; x < div; x++) {

      push();
      translate(x * size, y * size);

      fill(palette[x % palette.length]);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(size / 2);

      pop();
    }
  }
}