let letter = "A";
let pallet = ["#ffbc42","#d81159","#8f2d56","#218380","#73d2de"];

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  fill(pallet[int(random(pallet.length))]);
  stroke(255);
  strokeWeight(3);
  textSize(300);
  background(pallet[int(random(pallet.length))]);
}

function draw() {
  text(letter, width / 2, height / 2);
}

function keyTyped() {
  background(pallet[int(random(pallet.length))]);
  fill(pallet[int(random(pallet.length))]);
  textSize(random(0, 500));
  letter = key;
}