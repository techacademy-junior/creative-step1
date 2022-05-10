let color = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2","#073B4C"];

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  rectMode(CENTER);


  let cols = 10;
  let rows = cols;
  let cellW = width / cols;
  let cellH = height / rows;
  let s = 0.8;

  for (let j = 0; j < rows; j = j + 1) {
    for (let i = 0; i < cols; i = i + 1) {
      let x = i * cellW;
      let y = j * cellH;

      let w = cellW;
      let h = cellH;
      
      for(k = 0; k < 3 ; k = k + 1){
        fill(random(color));
        rect(x + cellW/2 , y + cellH/2 , w * (s - 0.3 * k), h * (s - 0.3 * k)); 
      }

    }
  }
}