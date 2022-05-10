let color = ["#FF0000", "#00FF00"];

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
  //noStroke();
  noFill();
  stroke(255);
  strokeWeight(3);
  
  let cells = 10;
  let offset = 5;
  let w = width / cells;
  let h = height / cells;
    
  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      
      let x = i * w; 
      let y = j * h;
  
      if(random(100) < 50){
        if(random(100)<50){
          arc(x+w/2,y+h/2,w,h,0,270);  
        }else{
          arc(x+w/2,y+h/2,w,h,90,360);
        }
      }else{
       if(random(100)<50){
          arc(x+w/2,y+h/2,w,h,180,90);  
        }else{
          arc(x+w/2,y+h/2,w,h,270,180);
        }
      }

          
       

    }
  }

  
}
