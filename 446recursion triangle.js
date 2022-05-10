let sideSize = 400;
let repeat = 5;
let pallet = ["#003049","#d62828","#f77f00","#fcbf49","#eae2b7"];

function setup() {
  createCanvas(400, 400);
  noStroke();
  stroke(255);
  background(pallet[int(random(pallet.length))]);
  
  let x = width / 2 - sideSize / 2;
  let y = height / 2 + sin(PI / 3) * sideSize / 2;
  
  recursion(x, y, sideSize, repeat);
}

function recursion(x, y, sideSize, repeat) {

  if (repeat < 0) return;
  
  fill(pallet[int(random(pallet.length))]);
  drawTriangle(x, y, sideSize);
  
  repeat--;
  let halfSize = sideSize / 2;
  
  recursion(x, y, halfSize, repeat);
  recursion(x + halfSize, y, halfSize, repeat);
  recursion(x + halfSize / 2, y - sin(PI / 3) * halfSize, halfSize, repeat);
}

function drawTriangle(x, y, sideSize) {
  triangle(x, y, x + sideSize / 2, y - sin(PI / 3) * sideSize, x + sideSize, y);
}