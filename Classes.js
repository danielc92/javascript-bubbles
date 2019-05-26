let bubbles_array = [];
let number_of_bubbles = 10;


function setup() {
    // p5.js function to create a canvas
    createCanvas(800, 800);
    print(height);
    // Creating bubble instance of different radius and coordinates
    for (let index = 0; index <= number_of_bubbles; index ++) {
        x_pos = random(width);
        y_pos = random(height);
        radius = random(10,60);
        bubbles_array[index] = new Bubble(x_pos, y_pos, radius)
    }

    // bubbles_array[0] = new Bubble(600, 150, 50);
    // bubbles_array[1] = new Bubble(100, 550, 60);
    // bubbles_array[2] = new Bubble(200, 200, 23);
}


function draw() {
    background(0);
    
    for (let index = 0; index < bubbles_array.length ; index ++) {
        bubbles_array[index].move();
        bubbles_array[index].show();
    }

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


