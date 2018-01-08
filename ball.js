class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.r = 30;
        this.destroyed = false;
        this.velX = 0;
        this.velY = 0;
    }

    display() {
        fill('#fb2e01');
        ellipse(this.x, this.y, this.r, this.r);
    }

    move() {
        this.x += this.velX;        
        this.y += this.velY;
        this.checkSides();     
    }

    checkSides() {
        if (this.y >= height - this.r / 2) {
            this.velX = 0;
            this.velY = 0;
            this.x = width / 2;
            this.y = height / 2;
        } else if (this.x >= width - this.r / 2) {
            this.velX *= -1;
        } else if (this.y <= this.r / 2) {
            this.velY *= -1;
        } else if (this.x <= this.r / 2) {
            this.velX *= -1;
        }
    }

    meets(paddle) {
        if (this.x > paddle.x - paddle.l / 2  &&
            this.x < paddle.x + paddle.l / 2 &&
            this.y > paddle.y - this.r / 2) {
                this.velY *= -1;
        }
    }

    hits(brick) {
        var distance = dist(this.x, this.y, brick.x, brick.y);
        if (distance < brick.r + this.r) {
          return true;
        } else {
          return false;
        }
    }
}

