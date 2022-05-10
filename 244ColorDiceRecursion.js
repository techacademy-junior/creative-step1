let pallet = ["#f6bd60", "#f7ede2", "#f5cac3", "#84a59d", "#f28482"];

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  noStroke();
  drawingContext.shadowColor = color(0, 0, 0,64);
  drawingContext.shadowBlur = 8;
}

function draw() {
  let bgColor = pallet[int(random(pallet.length))];
  background(bgColor);

  drawDiceRecursion(0, 0, width, pallet);
}

function drawDiceRecursion(x, y, size, pallet) {

  if (size < 50) return;
  for (let yOff = 0; yOff < size; yOff += size / 2) {
    for (let xOff = 0; xOff < size; xOff += size / 2) {

      let diceNum = int(random(1, 7));
      drawDice(x + xOff, y + yOff, size / 2, diceNum, pallet);

      if (int(random(2)) == 0) {
        drawDiceRecursion(x + xOff, y + yOff, size / 2, pallet);
      }
    }
  }
}

function drawDice(x, y, size, type, pallet) {

  let rectColor = pallet[int(random(pallet.length))];
  fill(rectColor);
  rect(x, y, size, size, size / 10);

  let circleSize = size / 5;
  let circleColor
  do {
    circleColor = pallet[int(random(pallet.length))];
  } while (circleColor == rectColor);

  fill(circleColor);
  
  let interval = size / 4;
  switch (type) {
    case 1:
      ellipse(x + interval*2, y + interval * 2, circleSize * 2);
      break;
    case 2:
      ellipse(x + interval, y + interval, circleSize);
      ellipse(x + interval * 3, y + interval * 3, circleSize);
      break;
    case 3:
      ellipse(x + interval, y + interval, circleSize);
      ellipse(x + interval * 2, y + interval * 2, circleSize);
      ellipse(x + interval * 3, y + interval * 3, circleSize);
      break;
    case 4:
      ellipse(x + interval, y + interval, circleSize);
      ellipse(x + interval * 3, y + interval, circleSize);
      ellipse(x + interval, y + interval * 3, circleSize);
      ellipse(x + interval * 3, y + interval * 3, circleSize);
      break;
    case 5:
      ellipse(x + interval, y + interval, circleSize);
      ellipse(x + interval * 3, y + interval, circleSize);
      ellipse(x + interval * 2, y + interval * 2, circleSize);
      ellipse(x + interval, y + interval * 3, circleSize);
      ellipse(x + interval * 3, y + interval * 3, circleSize);
      break;
    case 6:
      ellipse(x + interval, y + interval, circleSize);
      ellipse(x + interval * 3, y + interval, circleSize);
      ellipse(x + interval, y + interval * 2, circleSize);
      ellipse(x + interval, y + interval * 3, circleSize);
      ellipse(x + interval * 3, y + interval * 2, circleSize);
      ellipse(x + interval * 3, y + interval * 3, circleSize);
      break;
    default:
      console.log("サイコロの目を１〜６の整数に設定してください");
      break;
  }
}