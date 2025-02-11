var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 3,
    ySpeed: 3,
    colour: 'navy',
    draw: function(){
        fill( this.colour );
        ellipse(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 4,
    ySpeed: 3,
    colour: 'pink',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var greenBrick = {
    x: 100,
    y: 150,
    w: 30,
    h: 30,
    xSpeed: 3,
    ySpeed: 6,
    colour: 'olive',
    draw: function(){
        fill(this.colour);
        ellipse(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var yellowBrick = {
    x: 200,
    y: 300,
    w: 30,
    h: 30,
    xSpeed: 4,
    ySpeed: 3,
    colour: 'maroon',
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

// Added a triangle shape with turquoise color
var triangleBrick = {
    x1: 300, y1: 100,
    x2: 320, y2: 140,
    x3: 280, y3: 140,
    xSpeed: 2,
    ySpeed: 4,
    colour: 'turquoise',
    draw: function(){
        fill(this.colour);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    },
    move: function(){
        this.x1 += this.xSpeed;
        this.x2 += this.xSpeed;
        this.x3 += this.xSpeed;
        this.y1 += this.ySpeed;
        this.y2 += this.ySpeed;
        this.y3 += this.ySpeed;

        if(this.x1 < 0 || this.x2 > width){
            this.xSpeed *= -1;
        }
        if(this.y1 > height || this.y3 < 0){
            this.ySpeed *= -1;
        }
    }
};

// Added a quadrilateral with gold color
var quadBrick = {
    x1: 400, y1: 250,
    x2: 440, y2: 250,
    x3: 420, y3: 290,
    x4: 380, y4: 290,
    xSpeed: 3,
    ySpeed: 2,
    colour: 'gold',
    draw: function(){
        fill(this.colour);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    },
    move: function(){
        this.x1 += this.xSpeed;
        this.x2 += this.xSpeed;
        this.x3 += this.xSpeed;
        this.x4 += this.xSpeed;
        this.y1 += this.ySpeed;
        this.y2 += this.ySpeed;
        this.y3 += this.ySpeed;
        this.y4 += this.ySpeed;

        if(this.x1 < 0 || this.x2 > width){
            this.xSpeed *= -1;
        }
        if(this.y1 > height || this.y4 < 0){
            this.ySpeed *= -1;
        }
    }
};

function setup(){
    createCanvas(720,720);
}

function draw(){
    background('lightblue'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
    greenBrick.draw();
    greenBrick.move();
    yellowBrick.draw();
    yellowBrick.move();
    triangleBrick.draw();
    triangleBrick.move();
    quadBrick.draw();
    quadBrick.move();
}
