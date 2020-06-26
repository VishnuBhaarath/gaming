
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x=120;
var y=10;
var speedY=0;
var speedX=0;
drawcomponent()
function drawcomponent(){
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(y, x, 30, 30);
 
}
function updatesquare(){

      ctx.fillStyle = "#FF0000";
      
     
      ctx.fillRect(y, x, 30, 30);
 }
 function moveup() {
   
     ctx.clearRect(y, x, 30, 30);
      x=x-1;
     updatesquare()
}

function movedown() {
	ctx.clearRect(y, x, 30, 30);
    x=x+1;
    updatesquare()
}

function moveleft() {
	ctx.clearRect(y, x, 30, 30);
    y=y+1;
    updatesquare()
 
}

function moveright() {
	ctx.clearRect(y, x, 30, 30);
    y=y-1;
    updatesquare()
}