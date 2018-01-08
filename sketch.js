var paddle;
var ball;
var bricks = new Array();
var brickCount;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    paddle = new Paddle();
    ball = new Ball();
    brickCount = 20;
    for (var i = 0; i < brickCount; i++) {
        bricks[i] = new Brick();
    }

    winText = createP('Press SPACE to start and A or D to move.');
    winText.position(width / 2 - 280, height - 200);
}

function draw() {
    background('#ffe28a');

    paddle.move();
    paddle.display();

    ball.move();
    ball.meets(paddle);
    ball.display();

    for (brick of bricks) {
        if (!brick.destroyed) {
            if (ball.hits(brick)) {
                brick.shrink();
                ball.velY *= -1;
            } 
            brick.display();
        }
    }
}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        paddle.movingLeft = true;
    } else if (key === 'd' || key === 'D') {
        paddle.movingRight = true;    
    } else if (key === ' ') {
        ball.velX = 1;
        ball.velY = random(1, 2) * 4;
    }
}

function keyReleased() {
    paddle.movingRight = false;
    paddle.movingLeft = false;
}