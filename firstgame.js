
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x=120;
var y=10;

setInterval(drawsquare, 20);

function drawsquare(){

      ctx.fillStyle = "#FF0000";
      ctx.fillRect(10, x, 30, 30);
       ctx.clearRect(10, x, canvas.width, canvas.height);
      x=x+1;
      y=y+1;
     
     
      
}