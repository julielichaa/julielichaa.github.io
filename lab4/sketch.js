var shapes = []; // circles and rectangles
var positions = []; // only the y changes 
var speed = []; // doesn't change
var colours = []; // doesn't change 
var rotations = []; // doesn't change
var numberOfShapes = 300;

var btn; 
var thursday = false;
var mysound;
var img; // Added image variable

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Load an image using createImg()
    img = createImg("IMG_8226.JPG", "Description of Image");
    img.position(50, 50); // Adjust position if needed
    img.size(500, 500); // Resize the image to make it smaller

    mysound = createAudio("mysound.mp3");

    // Change the button text to "Partyyyy Time!" initially
    btn = createButton("Partyyyy Time!"); 
    btn.position(10, 10);
    btn.mousePressed(function () {
        thursday = !thursday;
        if (thursday) {
            btn.html("Leave Party");
            mysound.play();
        } else {
            btn.html("Partyyyy Time!");  // Change button text back to "Partyyyy Time!"
        }
    });

    for (var i = 0; i < numberOfShapes; i++) {
        colours[i] = color(random(255), random(255), random(255));
        rotations[i] = random(PI / 2);
        positions[i] = random(windowHeight);
        speed[i] = random(1, 7);
        if (random() > 0.4) {
            shapes[i] = "rect";
        } else {
            shapes[i] = random() > 0.5 ? "circle" : "emoji";
        }
    }
    noStroke();
    rectMode(CENTER);
    textSize(20);
}

function draw() {
    background('lightblue');  // Change the background color to light blue
    if (thursday === true) {
        confetti();
    }
}

function confetti() {
    var interval = windowWidth / numberOfShapes;

    for (var i = 0; i < numberOfShapes; i++) {
        fill(colours[i]);
        push();
        translate(i * interval, positions[i]);
        rotate(rotations[i]);
        if (shapes[i] === "rect") {
            rect(0, 0, 5, 30);
        }
        if (shapes[i] === "circle") {
            circle(0, 0, 10);
        }
        if (shapes[i] === "emoji") {
            text("😍", 0, 0);
        }
        pop();
    }

    // change the y position for each shape based on speed
    for (var i = 0; i < numberOfShapes; i++) {
        positions[i] += speed[i];
        if (positions[i] > height) {
            positions[i] = -50;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
