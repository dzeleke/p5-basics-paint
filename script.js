var newWidth = 30;
var newHeight = 30;

//setup function exicutes once

function setup(){
    createCanvas(600,400);
    background(250,50,100)
   
}

//draw function loops forever
function draw(){
    // background(20)
    if(mouseIsPressed){
       noStroke();
   fill(100,200,300,50)
   rect(mouseX,mouseY,newWidth,newHeight)
}  
    }
   