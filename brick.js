class Brick {
    constructor() {
        this.r = random(20, 70);
        this.x = random(this.r, width - this.r);
        this.y = random(this.r, height - height / 2);
        this.total = floor(random(3, 10));
        this.colors = [ '#666547',
                        '#5b5a3f',
                        '#515038',
                        '#474631',
                        '#3d3c2a',
                        '#333223',
                        '#28281c'];
        this.color = this.colors[this.total - 3];
    }

    display() {
        push();
        fill(this.color);
        noStroke();
        translate(this.x, this.y);
        beginShape();
        for (var i = 0; i < this.total; i++) {
            var angle = map(i, 0, this.total, 0, TWO_PI);
            var r = this.r;
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
        stroke(0);
        strokeWeight(1);
        pop();
    }

    
    shrink() {
        if (this.r > 40) {
            this.r -= 10;
        } else {
            this.destroyed = true;
        }
    }
}