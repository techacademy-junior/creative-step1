let url = "https://loremflickr.com/400/400";
let img;

function preload() {
  img = loadImage(url);
}

function setup() {
  createCanvas(400, 400);

  background(0);

  let dotSize = 10;

  for (let y = dotSize/2; y < height; y += dotSize) {

    for (let x = dotSize/2; x < width; x += dotSize) {

      let color = img.get(x, y);

      fill(color);
      circle(x, y, dotSize);
    }
  }
}