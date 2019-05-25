function setup() {
    // p5.js function to create a canvas
    createCanvas(800, 800);
    b1 = new Bubble(100, 200);
}

function draw() {
    background(0);
    b1.show();
    b1.move();
    b1.show();
    b1.move();
    b1.show();
}

class Bubble {
    
    // Constructor sets properties of instance of Bubble
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    // changes the coordinate for Bubble instance with a random offset in x and y
    move () {
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 15, 15);
    }
}


