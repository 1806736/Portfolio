
let x = 200;
let y = 200;
let extraCanvas;

function setup() {
    createCanvas(500, 500);
    extraCanvas = createGraphics(500, 500);
  extraCanvas.clear();
  background(10);
    for(let i = 10; i <= 500; i = i + 10){
    for(let j = 10; j <= 500; j = j + 10){
        push();
        translate(i,j);
        rotate(random(PI));
        fill(random(300));
        square(0,0, 10);
        pop();
        
     
    }
    }
    for(let i = 10; i <= 500; i = i + 50){
        for(let j = 10; j <= 500; j = j + 50){
            push();
            translate(i,j);
            rotate(random(PI));
            fill(random(300));
            circle(0,0,10);
            pop();
            
         
        }
        }
}

function draw() {

    x += random(-5, 5);
    y += random(-5, 5);
    
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    let starX = random(width);
    let starY = random(height);
    ellipse(starX, starY, 5, 5);

    
     
  image(extraCanvas, 0, 0);
  fill(255, 0, 0);
    stroke(100);
    
}