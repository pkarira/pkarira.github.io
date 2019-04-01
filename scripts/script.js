var canvas = document.getElementById("myCanvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.beginPath();
var windowWidth=window.innerWidth,windowHeight=window.innerHeight,circleRadius=20,circleX=circleRadius,circleY=windowHeight-circleRadius;
var accelerationX=5,accelerationY=2,accelerationRadius=3,times=0,timesForSmallerCircles=0;
var draw=setInterval(redrawBackground,5);
var accelerationsX = [0,-0.5,-1,0.5,1];
var accelerationsY = [2,1.3,1.3,1.3,1.3];
var positionsY = [windowHeight,windowHeight,windowHeight,windowHeight,windowHeight];
var positionsX = [windowWidth/2,windowWidth/2,windowWidth/2,windowWidth/2,windowWidth/2];
function redrawBackground()
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
smallerCircles = setInterval(translatingCircles,10);
}
}
function drawCircle(X,Y,circleRadius,fillStyle)
{
ctx.beginPath();
ctx.arc(X,Y, circleRadius, 0, Math.PI * 2, true);
ctx.fillStyle = fillStyle;
ctx.fill();
}
function translatingCircles()
{
ctx.clearRect(0, 0, canvas.width,canvas.height);
ctx.beginPath();
ctx.arc(windowWidth,windowHeight/2, windowWidth/2, 0, Math.PI * 2, true);
ctx.fillStyle = "#ffffff";
ctx.fill();
for (i =0 ; i<5 ; i++)
{
var fillStyle;
if(i==0)
fillStyle="#ffff00"
else
if(i==1 || i==2)
fillStyle="#ffffff"
else
if(i==3 || i==4)
fillStyle="#000000"
drawCircle(positionsX[i],positionsY[i],30,fillStyle)
positionsX[i]+=accelerationsX[i];
positionsY[i]-=accelerationsY[i];
}
timesForSmallerCircles++;
if(timesForSmallerCircles>200)
clearInterval(smallerCircles);
}