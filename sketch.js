var hr;  
var min;
var sec;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)
  

}

function draw() {
background(0);  
  translate(400,200);
  rotate(-90);
min=minute();
hr=hour();
sec=second();
secAngle=map(sec,0,60,0,360);
minAngle=map(min,0,60,0,360);
hrAngle=map(hr%12,0,12,0,360);
push();
rotate(hrAngle);
strokeWeight(9);
stroke("red");
line(0,0,50,0);
pop();
push();
rotate(minAngle);
strokeWeight(9);
stroke("blue")
line(0,0,100,0)
pop();
push();
rotate(secAngle);
strokeWeight(5);
stroke("green");;
line(0,0,70,0);
pop();
noFill();
stroke("red");
strokeWeight(5);
arc(0,0,260,260,0,hrAngle);
stroke("blue");
strokeWeight(5);
arc(0,0,250,250,0,minAngle);
stroke("green");
strokeWeight(5);
arc(0,0,240,240,0,secAngle);



}