class Paddle {
    constructor() {
        this.x = width/2;
        this.y = height - 40;
        this.l = 150;
        this.h = 30;
        this.movingRight = false;
        this.movingLeft = false;
    }

    display() {
        fill('#6fcb9f');
        rect(this.x - 75, this.y, this.l, this.h);
    }

    move(amount) {
        if (this.movingLeft) {
            this.x -= 10;
        } else if (this.movingRight) {
            this.x += 10;
        }
        this.checkSides();
    }

    checkSides() {
        if (this.x <= this.l / 2) this.x = this.l / 2;
        else if (this.x >= width - this.l / 2) this.x = width - this.l / 2;
    }
}