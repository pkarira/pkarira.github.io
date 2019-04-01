var canvas = document.getElementById("myCanvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.beginPath();
var windowWidth=window.innerWidth,windowHeight=window.innerHeight,circleRadius=20,circleX=circleRadius,circleY=windowHeight-circleRadius;
var accelerationX=5,accelerationY=2,accelerationRadius=3,times=0;
var draw=setInterval(redraw,5);
function redraw()
{
ctx.clearRect(0, 0, canvas.width,canvas.height);
ctx.beginPath();
ctx.arc(circleX,circleY, circleRadius, 0, Math.PI * 2, true);
ctx.fillStyle = "#ffffff";
ctx.fill();
circleX+=accelerationX;
circleY-=accelerationY;
circleRadius+=accelerationRadius;
times++;
if(times>250)
{
clearInterval(draw);
ctx.clearRect(0, 0, canvas.width,canvas.height);
ctx.beginPath();
ctx.arc(windowWidth,windowHeight/2, windowWidth/2, 0, Math.PI * 2, true);
ctx.fillStyle = "#ffffff";
ctx.fill();}
}
function combiningTranslatingCircles()
{

}
function translatingCircles()
{

}