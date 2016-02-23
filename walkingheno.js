
var heno;
var canvas;
var context;
var frameHeight;
var frameWidth;
var currentFrame = 0;

setInterval(drawFrame,80);

window.onload= function(){
	heno = new Image();
	heno.src = 'walkingsheetsmall.png'
	canvas = document.getElementById('mycan');
	context = canvas.getContext("2d");
	console.log('init');
	stylesheet(371,411,4,3);
}

function stylesheet(_frameWidth, _frameHeight, _fpr, _fpc){
	frameHeight= _frameHeight;
	frameWidth = _frameWidth;

	console.log('hi');

}



function drawFrame(){
	context.clearRect(0,0,frameWidth,frameHeight);
	var startClipX = currentFrame%4 * frameWidth;
	var startClipY = Math.floor(currentFrame/4) * frameHeight;
	console.log(startClipX + ',' +  startClipY);
	context.drawImage(heno,startClipX, startClipY, 
		frameWidth, frameHeight, 0,0, frameWidth, frameHeight);

	currentFrame = (currentFrame + 1) % 12
}