let walkers = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 3; i++) {
    walkers.push(new Walker(width / 2, height / 2)); 
  }
}

function draw() {

  for (let walker of walkers) {
    
    fill(random(255), random(255), random(255));
    
    walker.updateAndDisplay();
  }
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update(interval) {
    this.direction = floor(random(4));
    this.interval = interval;

    switch (this.direction) {
      case 0:
        this.x += this.interval;
        break;
      case 1:
        this.x -= this.interval;
        break;
      case 2:
        this.y += this.interval;
        break;
      case 3:
        this.y -= this.interval;
        break;
    }

    if (this.x < 0) {
      this.x = 0;
    }
    if (width < this.x) {
      this.x = width;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (height < this.y) {
      this.y = height;
    }
  }

  updateAndDisplay() {
    beginShape(TRIANGLE_STRIP);

    vertex(this.x, this.y);
    this.update(20);
    vertex(this.x, this.y);
    this.update(20);
    vertex(this.x, this.y);

    endShape();
  }
}