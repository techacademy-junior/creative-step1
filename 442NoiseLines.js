let pallets = [
    ["#CC8529", "#8C7C66", "#FFC880", "#FFA733", "#805319"],
    ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"],
    ["#d9ed92", "#b5e48c-99d98c", "#76c893", "#52b69a", "#34a0a4", "#168aad", "#1a759f", "#1e6091", "184e77"]
  ];
  
  function setup() {
    createCanvas(400, 400);
    noFill();
  
    background("#f6f6e9");
  
    for (let j = 0; j < pallets.length; j++) {
  
      for (let i = 0; i < 20; i++) {
  
        let colorNum = int(random(pallets[j].length));
        let color = pallets[j][colorNum];
        
        stroke(color);
        drawNoiseLine(j * height / 4 + height / 4);
      }
    }
  }
  
  function drawNoiseLine(y) {
  
    let scale = height / 3;
    let noiseVal = random(1);
    let noiseStep = 0.5;
    let interval = 20;
  
    for (let i = 0; i < width; i += interval) {
  
      let startX = i;
      let startY = y + map(noise(noiseVal), 0, 1, -scale, scale);
      let endX = i + interval;
      let endY = y + map(noise(noiseVal + noiseStep), 0, 1, -scale, scale);
  
      line(startX, startY, endX, endY);
  
      ellipse(startX, startY, 10);
  
      noiseVal += noiseStep;
    }
  }