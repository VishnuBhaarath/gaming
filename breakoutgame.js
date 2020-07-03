var canvas = document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
function startGame() {
myGamePiece = new component(55, 15, "red", 210, 305);
mycircularball=new Ball(120,80,15,"red",0,2*Math.PI);
}
function Ball(x,y,radius,color,startangle,endangle){
	this.x=x;
    this.y=y;
    this.radius=radius;
    this.startangle=startangle;
    this.endangle=endangle;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,this.startangle,this.endangle);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    ctx.fillStyle = color;
    this.x=x;
    this.y=y;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}