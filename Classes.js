let bubbles_array = [];
let number_of_bubbles = 150;


function setup() {
    // p5.js function to create a canvas
    createCanvas(1024, 840);
    print(height);
    // Creating bubble instance of different radius and coordinates
    for (let index = 0; index <= number_of_bubbles; index ++) {
        x_pos = random(width);
        y_pos = random(height);
        radius = random(10,60);
        col_r = random(100, 255);
        col_g = random(100, 255);
        col_b = random(100, 255);
        bubbles_array[index] = new Bubble(x_pos, y_pos, radius, col_r, col_g, col_b);
    }

    // bubbles_array[0] = new Bubble(600, 150, 50);
    // bubbles_array[1] = new Bubble(100, 550, 60);
    // bubbles_array[2] = new Bubble(200, 200, 23);
}


function draw() {
    background(255);
    
    for (let index = 0; index < bubbles_array.length ; index ++) {
        bubbles_array[index].move();
        bubbles_array[index].show();
    }

}


class Bubble {
    
    // Constructor sets properties of instance of Bubble
    constructor (x, y, r=15, colour_r, colour_g, colour_b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.fill = [colour_r, colour_g, colour_b]
    }

    // changes the coordinate for Bubble instance with a random offset in x and y
    move () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(this.fill);

        //ellise() takes in x, y, width and height
        ellipse(this.x, this.y, this.r, this.r);
    }
}


