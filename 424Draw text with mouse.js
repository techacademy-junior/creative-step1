let pallet = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let letters = 'こんにちは世界！';
let drawText;

function setup() {
  createCanvas(400, 400);
  drawText = new DrawText(mouseX, mouseY, letters, pallet);
  background("#fefae0");

  drawingContext.shadowColor = color(220, 255);
  drawingContext.shadowBlur = 16;
}

function draw() {
  if (keyIsPressed) {
    background("#fefae0");
  }

  if (mouseIsPressed) {
    drawText.update(mouseX, mouseY);
    drawText.draw();
  }
}

function mousePressed() {
  drawText.reset(mouseX, mouseY)
}

class DrawText {
  constructor(x, y, letters, pallet) {
    this.x = x;
    this.y = y;
    this.pX = x;
    this.pY = y;
    this.letters = letters;
    this.pallet = pallet;
    this.counter = 0;
    this.colorCounter = 0;
    this.threshold = random(50);
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.pX = x;
    this.pY = y;
    this.counter = 0;
  }

  update(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    let texSize = dist(this.pX, this.pY, this.x, this.y);

    if (texSize <= this.threshold) return;

    textSize(texSize);

    let newLetter = this.letters.charAt(this.counter);
    let stepSize = textWidth(newLetter);

    if (texSize > stepSize) {
      let angle = atan2(this.y - this.pY, this.x - this.pX);

      push();
      translate(this.pX, this.pY);
      rotate(angle);

      fill(this.pallet[this.colorCounter]);
      text(newLetter, 0, 0);
      pop();

      this.counter++;

      this.threshold = random(50);

      this.pX = this.x;
      this.pY = this.y;

      if (this.counter >= this.letters.length) {

        this.counter = 0;

        this.colorCounter++;
        if (this.colorCounter >= this.pallet.length) {

          this.colorCounter = 0;
        }
      }
    }
  }
}