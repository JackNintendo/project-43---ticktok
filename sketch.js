var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  //translation and rotation
  translate(200,200);
  rotate(-90);
  //calculating time using a predefined function
  hr = hour();
  mn = minute();
  sc = second();
  //to create interactive rotation
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  //drawing seconds hand
  push();
  rotate(scAngle);
  stroke("cyan");
  strokeWeight(4);
  line(0,0,100,0);
  pop();
  //drawing minutes hand
  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(4);
  line(0,0,75,0);
  pop();
  //drawings hours hand
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(4);
  line(0,0,50,0);
  pop();
  //drawing arcs
  strokeWeight(6);
  point(0,0);
  noFill();

  //seconds
  stroke("cyan");
  arc(0,0,300,300,0,scAngle);
  //minutes
  stroke("red");
  arc(0,0,280,280,0,mnAngle);
  //hours
  stroke("blue");
  arc(0,0,260,260,0,hrAngle);

}