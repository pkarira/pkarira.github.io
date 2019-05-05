var canvas = document.getElementById("myCanvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.beginPath();
var windowWidth=window.innerWidth,windowHeight=window.innerHeight,circleRadius=20,circleX=circleRadius,circleY=windowHeight-circleRadius;
var accelerationX=5,accelerationY=2,accelerationRadius=3,times=0,timesForSmallerCircles=0;
var draw=setInterval(redrawBackground,0.5);
var accelerationsX = [0,-0.5,-1.7,0.5,1.7];
var accelerationsY = [2,1.3,1.3,1.3,1.3];
var positionsY = [windowHeight,windowHeight,windowHeight,windowHeight,windowHeight];
var positionsX = [windowWidth/2,windowWidth/2,windowWidth/2,windowWidth/2,windowWidth/2];
var buttonsX=[]
var buttonsY=[]
var buttonsText=["Resume"," Content","  Blogs","  About"]
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
smallerCircles = setInterval(translatingCircles,0.1);
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
fillStyle="#1E4E8B"
else
if(i==1 || i==2)
fillStyle="#ffffff"
else
if(i==3 || i==4)
fillStyle="#000000"
if(i==0)
drawCircle(positionsX[i],positionsY[i],50,fillStyle)
else
drawCircle(positionsX[i],positionsY[i],20,fillStyle)
positionsX[i]+=accelerationsX[i];
positionsY[i]-=accelerationsY[i];
}
timesForSmallerCircles++;
if(timesForSmallerCircles>200)
{clearInterval(smallerCircles);
drawButtons(21);addImage(positionsX[0],positionsY[0],70);}
}
function drawButtons(Radius)
{
for(var i=1;i<=4;i++)
{
buttonsX.push(positionsX[i]-3*Radius)
buttonsY.push(positionsY[i]-Radius)
if(i==1 || i==2)
ctx.fillStyle = "#ffffff";
else
ctx.fillStyle = "#000000";
ctx.fillRect(buttonsX[i-1],buttonsY[i-1],6*Radius,2*Radius)
ctx.beginPath()
ctx.arc(buttonsX[i-1],buttonsY[i-1]+Radius,Radius,0, Math.PI * 2, true);
ctx.arc(buttonsX[i-1]+6*Radius,buttonsY[i-1]+Radius,Radius, 0, Math.PI * 2, true);
ctx.fill();
ctx.font = '32px serif';
if(ctx.fillStyle == "#ffffff")
ctx.fillStyle = "#000000"
else
ctx.fillStyle = "#ffffff"
ctx.textBaseline="hanging"
ctx.fillText(buttonsText[i-1],buttonsX[i-1], buttonsY[i-1]+Radius/4 ,6*Radius);
}
}
function addImage(X,Y,Radius)
{
var img = new Image();
img.src = 'web.png';
img.onload = function() {
ctx.beginPath();
ctx.arc(X, Y, Radius, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
ctx.drawImage(img, X-Radius, Y-Radius, 2*Radius, 2*Radius);
ctx.arc(X,Y, Radius, 0, Math.PI * 2, true);
ctx.strokeStyle="#1E4E8B";
ctx.lineWidth = 10;
ctx.stroke();
};
}
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
function isInside(pos,width,height){
	for(var i=0;i<=3;i++)
    {if(pos.x > buttonsX[i] && pos.x < buttonsX[i]+width && pos.y < buttonsY[i]+height && pos.y > buttonsY[i])
    return i;
    }
	return -1;
}
canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var buttonNumber = isInside(mousePos,120,40);
    if (buttonNumber>=0) {
    console.log(buttonNumber)
    } 
}, false);