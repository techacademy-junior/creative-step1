function setup() {
  createCanvas(400, 400);
  background(192, 87, 69);
  noStroke();


  let cols = 10;
  let rows = cols;
  let cellW = width / cols;
  let cellH = height / rows;

  for (let j = 0; j < rows; j = j + 1) {
    for (let i = 0; i < cols; i = i + 1) {
      let x = i * cellW;
      let y = j * cellH;

      let w = cellW;
      let h = cellH;
      let r = random(0, 30);
      fill(226, 225, 155);
      ellipse(x + cellW / 2, y + cellH / 2, w - r, h - r);
    }
  }
}
