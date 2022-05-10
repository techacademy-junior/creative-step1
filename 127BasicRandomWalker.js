let walker1;
let walker2;

function setup() {
  createCanvas(400, 400);
  background(220);
  stroke(0, 50);
  strokeWeight(2);

  walker1 = new Walker(width / 2 - 100, height / 2);
  walker2 = new Walker(width / 2 + 100, height / 2);
}

function draw() {
  walker1.move();
  walker1.display();
  walker2.move();
  walker2.display();
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.direction = floor(random(4));
    switch (this.direction) {
      case 0:
        this.x += 1;
        break;
      case 1:
        this.x -= 1;
        break;
      case 2:
        this.y += 1;
        break;
      case 3:
        this.y -= 1;
        break;
    }
  }

  display() {
    point(this.x, this.y);
  }
}