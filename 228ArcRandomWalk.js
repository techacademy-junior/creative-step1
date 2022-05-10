let walker;
let pallet = ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"];
let pause = false;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(width / 2, height / 2);
  noFill();
  strokeCap(SQUARE);
  background(pallet[int(random(pallet.length))]);
  frameRate(30);
  drawingContext.shadowColor = color(0, 0, 0, 128);
  drawingContext.shadowBlur = 8;
}

function draw() {
  if (pause) return;

  walker.update();

  stroke(pallet[int(random(pallet.length))]);

  strokeWeight(random(40));

  walker.display();
}

function mousePressed() {
  pause = !pause;
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.diameter = random(width);
    this.start = random(0, TWO_PI);
    this.stop = random(0, TWO_PI);
  }

  display() {
    arc(this.x, this.y, this.diameter, this.diameter, this.start, this.stop);
  }
}