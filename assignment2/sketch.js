/*
Tutorial 1: P5.js Continuous Line Drawing
Source: https://editor.p5js.org/p5/sketches/Drawing:_Continuous_Lines

Tutorial 2: W3Schools JavaScript Animation (Moving an Element)
Source: https://www.w3schools.com/js/js_htmldom_animate.asp

Extensions:
- Combined P5.js interactive drawing with a moving shape controlled via JavaScript.
- Added user interaction: Clicking changes the movement speed.
- Enhanced visuals with color variation.
*/

let xPos = 0; // X position for the moving shape
let speed = 2; // The speed of movement
let lines = []; // It stores drawn lines

function setup() {
  createCanvas(600, 600);
  background(77777);
}

function draw() {
  background(220, 220, 255, 50); 
  drawLines();
  moveShape();
}

// Function to draw continuous lines from the P5.js tutorial
function mouseDragged() {
  let point = { x: mouseX, y: mouseY };
  lines.push(point);
}

function drawLines() {
  stroke(0);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < lines.length; i++) {
    vertex(lines[i].x, lines[i].y);
  }
  endShape();
}

// Function to move a shape (this is from the W3Schools animation tutorial)
function moveShape() {
  fill(255, 0, 0);
  noStroke();
  ellipse(xPos, height / 2, 50, 50);
  xPos += speed;

  // it resets the position if it's out of bounds
  if (xPos > width || xPos < 0) {
    speed *= -1;
  }
}

// The speed changes as you click (part of my extension)
function mousePressed() {
  speed = random(1, 5);
}
// You can also change the speed when you click (my addition)
function mousePressed() {
  speed = random(1, 5); // (my addition)
}
// you can press on 'C' to clear the drawing (my addition, it was not necessary but I learned it for our past assignment and I loved it)
function keyPressed() {
  if (key === 'C' || key === 'c') { 
    lines = []; // it clears the drawings on the canvas
    background(220); 
  }
}
// the codes below are codes I got from a few tutorials on youtube and on the internet as my attempt for awesomeness points!
function drawLines() {
  stroke(mouseX % 255, mouseY % 255, 200); // the color changes as you draw 
  strokeWeight(3);
  noFill();
  beginShape();
  for (let i = 0; i < lines.length; i++) {
    vertex(lines[i].x, lines[i].y);
  }
  endShape();
}
let bgColor = 220; // the background color changes with time

function draw() {
  background(bgColor, 220, 255, 50);
  drawLines();
  moveShape();
  
  // Gradually changes background color
  bgColor = (bgColor + 0.2) % 255;
}