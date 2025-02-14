var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
var brushTypeRadio; // New GUI element

function setup() {
    createCanvas(720, 300);
    colourPicker = createColorPicker('lightblue');
    
    strokeWeightSlider = createSlider(1, 10, 5, 1);
    
    bgColourPicker = createColorPicker('grey'); 
    
    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed(repaint); 

    brushTypeRadio = createRadio();
    brushTypeRadio.option('line', 'Line');
    brushTypeRadio.option('circle', 'Circle');
    brushTypeRadio.selected('line'); 

    background(bgColourPicker.value());
}

function draw() {
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());   

    if (mouseIsPressed) {
        if (brushTypeRadio.value() === 'line') {
            line(mouseX, mouseY, pmouseX, pmouseY);
        } else if (brushTypeRadio.value() === 'circle') {
            ellipse(mouseX, mouseY, strokeWeightSlider.value() * 2);
        }
    }
}

function repaint() {
    background(bgColourPicker.value());
}

// New: Clear canvas when 'C' is pressed
function keyPressed() {
    if (key === 'C' || key === 'c') {
        background(bgColourPicker.value());
    }
}
