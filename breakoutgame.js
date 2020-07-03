var canvas = document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle="red";
ctx.fill();
ctx.closePath();
function startGame() {
myGamePiece = new component(55, 15, "red", 210, 305);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    ctx.fillStyle = color;
    this.x=x;
    this.y=y;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}