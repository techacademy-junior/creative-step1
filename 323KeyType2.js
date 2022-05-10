let letters = "";
let colors = [];
let sizes = [];
let pallet = ["#335c67","#fff3b0","#e09f3e","#9e2a2b","#540b0e"];

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  stroke(220);
  strokeWeight(3);
  background(pallet[int(random(pallet.length))]);
}

function draw() {

  for (let i = 0; i < letters.length; i++) {
    fill(colors[i]);
    textSize(sizes[i]);
    let baseSize = 50;

    let x = i % 8 * baseSize + baseSize / 2;
    let y = int(i / 8) * baseSize + baseSize / 2;
    text(letters.charAt(i), x, y);
  }
}

function keyTyped() {
  
  if (letters.length >= 64) {
    letters = "";
    colors = [];
    sizes = [];
    background(pallet[int(random(pallet.length))]);
  }
  
  letters += key;

  for (let i = 0; i < key.length; i++) {
    colors.push(pallet[int(random(pallet.length))]);
    sizes.push(random(100));
  }
}