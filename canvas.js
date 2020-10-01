/*Author: Hayley Wing Yin Kwok
COM1008 Assignment 2*/

//Start of Drawing
function head(color) {
  //Face
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.rect(100,110,100,80);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
  
  //left ear
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(100,110);
  ctx.lineTo(105,95);
  ctx.lineTo(120,110);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
  
  //right ear
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(200,110);
  ctx.lineTo(195,95);
  ctx.lineTo(180,110);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
}
function body() {
  //body
  ctx.beginPath();
  ctx.fillStyle = "#BDADA0";
  ctx.rect(100,190,100,90);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
  
  //left foot
  ctx.beginPath();
  ctx.fillStyle = "#BDADA0";
  ctx.moveTo(100,280);
  ctx.lineTo(110,295);
  ctx.lineTo(120,280);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
  
  //right foot
  ctx.beginPath();
  ctx.fillStyle = "#BDADA0";
  ctx.moveTo(180,280);
  ctx.lineTo(190,295);
  ctx.lineTo(200,280);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
}
function whiskers() {
  //left whiskers
  ctx.beginPath();
  ctx.moveTo(70,150);
  ctx.lineTo(120,150);
  ctx.moveTo(70,160);
  ctx.lineTo(120,150);
  ctx.moveTo(70,170);
  ctx.lineTo(120,150);
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.closePath();
  
  //right whiskers
  ctx.beginPath();
  ctx.moveTo(230,150);
  ctx.lineTo(180,150);
  ctx.moveTo(230,160);
  ctx.lineTo(180,150);
  ctx.moveTo(230,170);
  ctx.lineTo(180,150);
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.closePath();
}
function faceExp(){
  //Mouth
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.moveTo(140,150);
  ctx.arc(150,150,10,0,Math.PI,false);   
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();  
  ctx.closePath();
  ctx.fill();
  
  //Left Eye    
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.moveTo(140,140);
  ctx.arc(135,140,5,0,Math.PI*2,true); 
   ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
  
  //Right Eye
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.moveTo(170,140);
  ctx.arc(165,140,5,0,Math.PI*2,true); 
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
}
function handsOnSide(){
  //left hand
  ctx.beginPath();
  ctx.fillStyle = "#BDADA0";
  ctx.moveTo(100,190);
  ctx.lineTo(85,200);
  ctx.lineTo(100,210);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
  
  //right hand
  ctx.beginPath();
  ctx.fillStyle = "#BDADA0";
  ctx.moveTo(200,190);
  ctx.lineTo(215,200);
  ctx.lineTo(200,210);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
}
function middleHands() { 
  //left hand
  ctx.beginPath();
  ctx.fillStyle = "#BDADA0";
  ctx.moveTo(110,200);
  ctx.lineTo(120,215);
  ctx.lineTo(130,200);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
  
  //right hand
  ctx.beginPath();
  ctx.fillStyle = "#BDADA0";
  ctx.moveTo(170,200);
  ctx.lineTo(180,215);
  ctx.lineTo(190,200);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
}
function ground() {
  //ground
  ctx.beginPath();
  ctx.fillStyle = "#006600";
  ctx.rect(0,300,500,100);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 0;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
}
function initdraw(color) {
	head(color);
	body();
	whiskers();
	faceExp();
	handsOnSide();
}
function moveHands() {
	head("#BDADA0");
	body();
	whiskers();
	faceExp();
	middleHands();
}
function draw(color) {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	initdraw(color);
	ground();
	
}
//End of Drawing

//Start of actions of buttons
//Start of actions of move to the Corner button
function cornerUpdate(){
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	if(p < 133){
		ctx.translate(2,0.75);
		initdraw("#BDADA0");
		p+=1;
		}
}
function cornerNextFrame() {
    requestId = requestAnimationFrame(cornerNextFrame);
    cornerUpdate();
    if ( p > 132){	
		cornerStop();
    }
 }
function cornerStart(){
	ctx.resetTransform();
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	cornerNextFrame();
	c=1;
}
function cornerStop() {
	if (requestId){
		cancelAnimationFrame(requestId);
	}
	ctx.resetTransform();
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	ctx.translate(266,99.75);
	initdraw("#BDADA0");
	face1 = {x:366, y:210, w:100, h:80};
	mouth = {x:406, y:250 , w:20, h:10};
	p=0;
}
// End of actions of move to the Corner button

//Start of actions of Reset button
function reset(){
	ctx.resetTransform();
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	face1 = {x:100, y:110, w:100, h:80};
	mouth = {x:140, y:150 , w:20, h:10};
	draw("#BDADA0");
	c = 1;
	count = true;
}
//End of actions of Reset button

//Start of actions of the dance button

function danceUpdate(){
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	if(t < 175){
		ctx.translate(2,0);
		}
	else if(t <345){
		ctx.translate(-2,0);
		}
		
	if (t % 30 ==0){
			a +=1;
			}
	if	(a%2 == 0){
		initdraw("#BDADA0");}
	else {
		moveHands();}
	t+=1;
		
}
function danceNextFrame() {
    requestId = requestAnimationFrame(danceNextFrame);
    danceUpdate();
	if (t > 345) {
		danceStop();
	}
 }
function danceStart(){
	ctx.resetTransform();
	t=0;
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	ctx.translate(-80,99.75);
	initdraw("#BDADA0");
	danceNextFrame();
}
function danceStop() {
	if (requestId){
		cancelAnimationFrame(requestId);
	}
	reset();
}
//End of dance action

//Start of actions of turn button 
function turn(color) {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	
	body();
    //left whiskers
	ctx.beginPath();
	ctx.moveTo(70,150);
	ctx.lineTo(100,150);
	ctx.moveTo(70,160);
	ctx.lineTo(100,156);
	ctx.moveTo(70,170);
	ctx.lineTo(100,160);
	ctx.lineWidth = 1;
	ctx.stroke();
	ctx.closePath();
  
    //right whiskers
    ctx.beginPath();
    ctx.moveTo(230,150);
    ctx.lineTo(200,150);
    ctx.moveTo(230,160);
    ctx.lineTo(200,156);
    ctx.moveTo(230,170);
    ctx.lineTo(200,160);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
	
    head(color);
	
	//tail
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.arc(150, 257, 10, 0, Math.PI*2, true);
	ctx.lineWidth = 3;
	ctx.stroke();
	ctx.closePath();
	ctx.fill();
	
	handsOnSide();
	ground();
}
function turnCount(){
	c +=1;
	if (c%2 == 0){
		mouth = {x:0, y:0 , w:0, h:0};
		turn("#BDADA0");
		}
	else {
		reset();
		}	
}
//End of actions of turn button
//End of actions of buttons

//Start of effect of clicking on the canvas

function getMouseXY(e) {
	var boundingRect = canvas.getBoundingClientRect();
	var offsetX = boundingRect.left;
	var offsetY = boundingRect.top;
	var w = (boundingRect.width-canvas.width)/2;
	var h = (boundingRect.height-canvas.height)/2;
	offsetX += w;
	offsetY += h;
	var mx = Math.round(e.clientX-offsetX);
	var my = Math.round(e.clientY-offsetY);
	return {x: mx, y: my};
}

function change(evt, face1) {
	var pos = getMouseXY(evt);
	var insideFace = checkFace(pos.x, pos.y, face1);
	var insideMouth =  checkMouth (pos.x, pos.y, mouth);
	if (!insideFace){
		move(pos.x, pos.y);
		count=false;
	}
	
	if (!count){
		move(pos.x, pos.y);
	}
	
	if (insideFace && count){
		if (insideFace){
			if (insideMouth){
				meow();}
			else if (c%2 == 0){
				turn("#ff5050");}
					else {
						changeFace();}
		}
	}	
}
	
//Start of change face color action
function checkFace(x,y, face1) {
  return ((x>=face1.x)
          && (x<=face1.x+face1.w)
          && (y>=face1.y)
          && (y<=face1.y+face1.h));
}

function changeFace() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	draw("#ff5050");
}
//End of changing face colour action 
//Start of moving action
function move(x,y) {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	var mvx = x -107;
	var mvy = y - 297;
	ctx.translate(mvx,mvy);
	initdraw("#BDADA0");
	ctx.resetTransform();
}
//End of moving action

//Start of say meow action
function checkMouth (x,y, mouth){
	return ((x>=mouth.x)
          && (x<=mouth.x+mouth.w)
          && (y>=mouth.y)
          && (y<=mouth.y+mouth.h));
}
function meow () {
	ctx.fillStyle = "black";
	ctx.font = "16px sans-serif";
	ctx.fillText("Meow", 130,90);
}
//End of say meow action

//Main program
 
var canvas = document.getElementById('canvas');
var ctx =canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
var face1 = {x:100, y:110, w:100, h:80};
var mouth = {x:140, y:150 , w:20, h:10};
var t = 0;
var c =1;
var p=0;
var a=0;
var count = true;

var cornerButton = document.getElementById("corner_button");
cornerButton.addEventListener('click', cornerStart);
var resetButton = document.getElementById("reset_button");
resetButton.addEventListener('click', reset);
var turnButton = document.getElementById("turn_button");
turnButton.addEventListener('click', turnCount);
var danceButton = document.getElementById("dance_button");
danceButton.addEventListener('click', danceStart);
var canvas = document.getElementById('canvas');
canvas.addEventListener('click', function(evt) {  change(evt, face1); });

draw("#BDADA0");