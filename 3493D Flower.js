function setup() {
    createCanvas(400, 400, WEBGL);
    noStroke();
    angleMode(DEGREES);
  }
  
  function draw() {
    background(200, 230, 80);
  
    rotateY(millis() / 10);
  
    fill(255, 200, 0);
    sphere(50);
  
    fill(255, 100, 0);
    let petalCount = 10;
    for (let i = 0; i < petalCount; i++) {
      rotateZ(360 / petalCount);
      push();
      translate(0, -100);
      ellipsoid(20, 40, 20);
      pop();
    }
  }