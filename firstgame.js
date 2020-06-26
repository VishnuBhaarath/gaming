
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x=120;
var y=10;
ctx.fillStyle = "#FF0000";
ctx.fillRect(10, x, 30, 30);
setInterval(drawsquare, 20);
function drawsquare(){

      ctx.fillStyle = "#FF0000";
      ctx.clearRect(10, x, 30, 30);
      x=x+1;
      ctx.fillRect(10, x, 30, 30);
 
     
     
      
}