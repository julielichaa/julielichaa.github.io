

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0, 150, 50);
    fill('red');
    stroke('blue')
    for(var i = 0; i < 10000; i++){
        rect((i*10)%width, (i*10)%height,10,100);
 }

 fill('black');
 stroke('white')
 if(mouseX < 200){
    rect(mouseX,mouseY,100,100);
 }else{
    rect(mouseX,mouseY,50,50,25)
 }
}