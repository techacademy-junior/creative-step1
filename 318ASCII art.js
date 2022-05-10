let img;
let url = "https://loremflickr.com/300/300";

function preload() {
  img = loadImage(url);
}

function setup() {
  createCanvas(img.width * 2, img.height);
  
  image(img, 0, 0);

  drawAsciiArt(img, width / 2, 0);
}

function drawAsciiArt(img, startX, startY) {
  textAlign(CENTER, TOP);

  let size = 5;

  for (let y = 0; y <= img.height; y += size) {
    for (let x = 0; x <= img.width; x += size) {

      let color = img.get(x, y);
      let gray = ColorToGrayScale(color);
      fill(color);

      let tSize = map(gray, 0, 255, size * 1.5, size / 2);
      textSize(tSize);

      let hiraganaNumber = floor(random(12353, 12439));
      let hiragana = String.fromCodePoint(hiraganaNumber);
      text(hiragana, startX + x, startY + y);
    }
  }
}

function ColorToGrayScale(color) {
  let grayScale = red(color) * 0.299 + green(color) + 0.587 + blue(color) * 0.114;
  return grayScale;
}