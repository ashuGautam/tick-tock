var hr;
var mn;
var sc;

function preload(){
	clock = loadImage("clock.png");
}
function setup() {
	createCanvas(500, 400);
	angleMode(DEGREES);
}

function draw() {

	background(clock);

	hr = hour();
	mn = minute()-1;
	sc = second();

	translate(250, 200);
	rotate(-90);

	strokeWeight(9);
	noFill();

	stroke(255, 215, 5);
	var secondAngle = map(sc, 0, 60, 0, 360);
	push();
	strokeWeight(5);
	rotate(secondAngle);
	line(0, 0, 120, 0);
	pop();

	stroke(255, 215, 5);
	var minuteAngle = map(mn, 0, 60, 0, 360);
	push();
	rotate(minuteAngle);
	line(0, 0, 100, 0);
	pop();

	stroke(255, 215, 5);
	var hourAngle = map(hr % 12, 0, 12, 0, 360);
	push();
	rotate(hourAngle);
	line(0, 0, 70, 0);
	pop();

	drawSprites();
}