function setup() {

    createCanvas(400, 400);
    background(200, 220, 200);
  
    stroke(255, 140, 10, 180);
    fill(255, 200, 0, 180);
  
    for (let i = 0; i < 50; i++) {
  
      drawStar(random(width), random(height), random(10, 60), random(360));
    }
  
    noStroke()
  
    for (let i = 0; i < 500; i++) {
  
      fill(255, random(255));
      drawStar(random(width), random(height), random(9), random(360));
    }
  }
  
  function drawStar(x, y, radius, degree) {
  
    beginShape();
  
    let verticesCount = 10;
  
    for (let i = 0; i < verticesCount; i++) {
  
      let radian = TWO_PI / verticesCount * i + radians(degree);
  
      let isEvenNum = (i % 2 == 0);
  
      let r = isEvenNum ? radius : radius / 2;
  
      let vertX = x + r * sin(radian);
      let vertY = y - r * cos(radian);
  
      vertex(vertX, vertY);
    }
    endShape(CLOSE);
  }