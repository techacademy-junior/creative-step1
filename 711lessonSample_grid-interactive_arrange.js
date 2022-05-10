let color = ["#FF0000", "#00FF00"];

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
  //noStroke();


  
}

function draw () {
  background(0);
  randomSeed(4);
    
  let cells = 10;
  let offset = 5;
  let w = width / cells;
  let h = height / cells;
  
  let sw = map(mouseX, 0, width, 1, 3);
  strokeWeight(sw);
  let sc = map(mouseY, 0, height, 1, 4);
    
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
      
      for(n = 0; n < sc; n ++){
        line(-d/2,-d/2,d/2,d/2 - d/4 * n);
      }
      for(n = 0; n < sc; n ++){
        line(-d/2,-d/2,d/2 - d/4 * n, d/2);
      }
      
      pop();
      
    }
  }

  
}