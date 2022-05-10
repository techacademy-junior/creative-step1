let color = ["#fac8cd", "#d7bcc8", "#98b6b1", "#629677","#495d63"];

function setup() {
  createCanvas(400, 400);
  background(random(255));
  //noStroke();
  strokeWeight(1);
  noFill();

  let cols = 20;
  let rows = cols;
  let cellW = width / cols;
  let cellH = height / rows;

  for (let j = 0; j < rows; j = j + 1) {
    for (let i = 0; i < cols; i = i + 1) {
      let x = i * cellW;
      let y = j * cellH;

      let w = cellW;
      let h = cellH;
      stroke(random(color));
      ellipse(x + cellW/2 + random(-10,10) , y + cellH/2 + random(-10,10) , w, h);

    }
  }
}