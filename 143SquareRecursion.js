let repeat = 5;
let pallet = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"]

function setup() {
  createCanvas(400, 400);

  let sideSize = width;
  drawSquareRecursion(0, 0, sideSize, repeat);
}

function drawSquareRecursion(x, y, sideSize, repeat) {

  let colorNum = int(random(pallet.length));
  let color = pallet[colorNum];
  fill(color);
  
  square(x, y, sideSize);
  
  repeat--;
  if (repeat > 0) {
    let halfSize = sideSize / 2;
    
    drawSquareRecursion(x, y, halfSize, repeat)
    drawSquareRecursion(x + halfSize, y, halfSize, repeat)
  }
}