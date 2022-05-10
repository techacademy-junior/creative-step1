let color = ["#d7e3fc", "#ccdbfd", "#c1d3fe", "#b6ccfe","#abc4ff"];

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);

  let cols = 10;
  let rows = cols;
  let cellW = width / cols;
  let cellH = height / rows;
  let s = 0.7;

  for (let j = 0; j < rows; j = j + 1) {
    for (let i = 0; i < cols; i = i + 1) {
      let x = i * cellW;
      let y = j * cellH;

      let w = cellW;
      let h = cellH;
      let shape_num = int(random(3));
      fill(random(color));
      if(shape_num == 0){
        rect(x + cellW/2 , y + cellH/2 , w * s, h * s);        
      }else if(shape_num == 1){
        ellipse(x + cellW/2 , y + cellH/2 , w * s, h * s);
      }else{
        fill("#ffe365")
        arc(x + cellW/2 , y + cellH/2 , w * s, h * s, 30, 330);
      }
      

    }
  }
}