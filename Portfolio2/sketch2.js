let xpos = 200
let ypos = 200

let directionx = 5;
let directiony = 3;

function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background('red');
  rect(10,ypos,8,80);
  rect(480,mouseY,8,80);
  ellipse(xpos,ypos,15,15);
  if (xpos>=width-20 || xpos==20)
    {
      directionx = -directionx
    }
  if (ypos>=height-20 || ypos==20)
    {
      directiony = -directiony
    }
  fill('white');
  text('SMASH DEMO',225,20);
  for (var i=0; i < 500; i+=20) {
     line(250,i,250,i+50);
  } 
  xpos = xpos +directionx;
  ypos = ypos +directiony;
}
