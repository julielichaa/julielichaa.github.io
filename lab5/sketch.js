var data;
var index = 0;
function preload(){
    data = loadJSON('data.json');
}


function setup(){
    createCanvas(600, 600);
    console.log(data);
}

function draw(){
    background('red');
    text(data.music[index],20,20);
    index++;
    index = index % data.music.length;
}

