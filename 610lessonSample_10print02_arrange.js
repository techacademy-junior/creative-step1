let color = ["#FF0000", "#00FF00"];

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
  //noStroke();
  noFill();
  strokeWeight(3);
  
  let cells = 10;
  let offset = 5;
  let w = width / cells;
  let h = height / cells;
    
  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      
      let cx = i * w + w / 2; 
      let cy = j * h + h / 2;
      let d = w;
  
      let rotate_num = int(random(4)) * 360 / 4;

      push();
      translate(cx, cy);
      rotate(rotate_num);
      stroke(random(color));
      arc(0, 0, d, d, 0, 180);
      pop();
      
    }
  }

  
}
