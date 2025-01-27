var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('#09FF') // automatic semicolon insertion
    quad(x,y,10,10);
    x = x + 2;
    x = x % 700; // modulo operator
    y = y + 5;
    y = y % 500;
}