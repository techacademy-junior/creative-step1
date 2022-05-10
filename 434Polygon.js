function setup() {
    createCanvas(400, 400);
    noStroke()
  
    let pallete = ["#d88c9a", "#f2d0a9", "#f1e3d3", "#99c1b9", "#8e7dbe"];
    background("#f0efeb");
  
    let diameter = 100;
    let vertexNum = 0;
    
    for (let j = 0; j < height / diameter; j++) {
      for (let i = 0; i < width / diameter; i++) {
  
        fill(pallete[int(random(pallete.length))]);
        drawPolygon(i * diameter + diameter / 2, j * diameter + diameter / 2, vertexNum + 3, diameter / 2);
        vertexNum++;
      }
    }
  }
  
  
  function drawPolygon(x, y, vertexNum, radius) {
  
    beginShape();
  
    for (let i = 0; i < vertexNum; i++) {
      let radian = TWO_PI / vertexNum * i;
      vertex(x + radius * sin(radian), y + radius * cos(radian));
    }
    endShape(CLOSE);
  
  }