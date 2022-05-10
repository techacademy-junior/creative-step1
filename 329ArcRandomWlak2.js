let walkers = [];
let pallet = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"];
let pause;

function setup() {
  createCanvas(400, 400);
  frameRate(30);

  let bgColor = pallet[int(random(pallet.length))];
  
  for (let i = 0; i < pallet.length; i++) {
    walkers.push(new Walker(width / 2, height / 2, width * sqrt(2)));
  }

  noFill();
  strokeCap(SQUARE);
  background(pallet[int(random(pallet.length))]);
  drawingContext.shadowColor = color(0, 0, 0, 128);
  drawingContext.shadowBlur = 18;
}

function draw() {
  if (pause) return;

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();

    stroke(pallet[i]);

    walkers[i].display();
  }
}

function mousePressed() {
  pause = !pause;
}

class Walker {
  constructor(x, y, maxDiameter) {
    this.x = x;
    this.y = y;
    this.maxDiameter = maxDiameter;
    this.start = 0;
    this.division = TWO_PI / int(random(10, 100));
    this.stop = this.division;
    this.diameter = 100;
    this.weight = random(10, 50);
    this.step = this.weight * 2;
  }

  update() {
    if (floor(random(2)) == 0) {
      this.diameter += this.step;
    } else {
      this.diameter -= this.step;
    }

    if (this.diameter > this.maxDiameter) {
      this.diameter -= this.step;
    }

    if (this.diameter < 100) {
      this.diameter += this.step;
    }

    this.start += this.division;
    this.stop += this.division;
  }

  display() {
    strokeWeight(this.weight);
    arc(this.x, this.y, this.diameter, this.diameter, this.start, this.stop);
  }
}