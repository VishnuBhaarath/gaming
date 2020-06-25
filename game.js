
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
ctx.moveTo(200, 100);
ctx.lineTo(400, 4000);
ctx.stroke();