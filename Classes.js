function setup() {
    // p5.js function to create a canvas
    createCanvas(800, 800);
    b1 = new Bubble(100, 200);
    b2 = new Bubble(200, 409);
}

function draw() {
    background(0);
    b1.show();
    b1.move();
    b1.show();
    b1.move();
    b1.show();
    b2.show();
    b2.move();
    b2.show();
    b2.move();
    b2.show();
}

class Bubble {
    
    // Constructor sets properties of instance of Bubble
    constructor (x, y, r=15) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    // changes the coordinate for Bubble instance with a random offset in x and y
    move () {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255);
        strokeWeight(3);
        noFill();

        //ellise() takes in x, y, width and height
        ellipse(this.x, this.y, this.r, this.r);
    }
}


