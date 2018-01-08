// rectangle
// c.fillStyle = 'rgba(0, 0, 255, 0.1)';
// c.fillRect(100, 100, 60, 60);
// c.fillStyle = 'rgba(0, 255, 255, 0.7)';
// c.fillRect(300, 100, 60, 60);
// c.fillStyle = 'rgba(255, 0, 255, 0.2)';
// c.fillRect(400, 200, 60, 60);
// c.fillStyle = 'rgba(255, 0, 0, 0.4)';
// c.fillRect(600, 400, 60, 60);

// line
// c.beginPath();
// c.moveTo(200, 100);
// c.lineTo(300, 200);
// c.lineTo(400, 200);
// c.lineTo(500, 100);
// c.strokeStyle = 'blue';
// c.stroke();

// for (var i = 0; i < 4000; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var r = parseInt(Math.random() * 255);
//     var g = parseInt(Math.random() * 255);
//     var b = parseInt(Math.random() * 255);
//     var a = Math.random();
//     c.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
//     c.fillRect(x, y, 60, 60);
// }

// arc / circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, true);
// c.strokeStyle = 'green';
// c.stroke();
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.ba
var c = canvas.getContext('2d');

function Circle(x, y, rad, dx, dy) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.minRad = rad;
    this.dx = dx;
    this.dy = dy;
    this.r = parseInt(Math.random() * 255);
    this.g = parseInt(Math.random() * 255);
    this.b = parseInt(Math.random() * 255);
    this.a = Math.random();

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, true);
        c.strokeStyle = `rgba(${ this.r}, ${ this.g}, ${ this.b}, ${ this.a})`;
        c.strokeStyle = `rgba(${ this.r}, ${ this.g}, ${ this.b}, ${ this.a})`;
        c.fillStyle  = `rgba(${ this.r}, ${ this.g}, ${ this.b}, ${ this.a})`;
        // c.stroke();
        c.fill();
    }

    this.update = function() {
        if (this.x + this.rad > innerWidth ||
            this.x - this.rad < 0) this.dx = -this.dx;

        if (this.y + this.rad > innerHeight ||
            this.y - this.rad < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        // interacivity
       if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
           mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.rad < maxRadius) this.rad += 5;
        } else if (this.rad > this.minRad) {
            this.rad -= 1;
        }

        this.draw();
    }
}

let mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 60;
const minRadius = 5;
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

var circleArray = [];
function init () {
    circleArray = [];
    for (var i = 0; i < 800; i++) {
        const rad = Math.random() * 5 + 2;
        let x = Math.random() * (window.innerWidth - rad * 2) + rad;
        let y = Math.random() * (window.innerHeight - rad * 2) + rad;
        let xdir = (Math.random() - 0.5) * 8;
        let ydir = (Math.random() - 0.5) * 8;
    
        circleArray.push(new Circle(x, y, rad, xdir, ydir));
    }
}

init();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circleArray.forEach(function(circle) {
        circle.update();
    });

}

animate();