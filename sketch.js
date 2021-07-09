function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("#708b9c");
  translate(width / 2, height / 2);
  rotate(-90);
  strokeWeight(5);
  stroke;
  let sec = second();
  let min = minute();
  let ho = hour();
  noFill();

  stroke("#08ce0e");
  let secArc = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secArc);

  stroke("black");
  let minArc = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minArc);

  stroke("#942582");
  let hoArc = map(ho % 12, 0, 24, 0, 360);
  arc(0, 0, 260, 260, 0, hoArc);

  push();
  stroke("yellow");
  rotate(secArc);
  line(0, 0, 150, 0);
  pop();

  push();
  stroke("red");
  rotate(minArc);
  line(0, 0, 140, 0);
  pop();

  push();
  stroke("orange");
  rotate(hoArc);
  line(0, 0, 130, 0);
  pop();

  strokeWeight(1);
  rotate(90);

  textSize(15);
  text("12", 0, -160);
  fill("#97dffc");

  textSize(15);
  text("3", 160, 0);
  fill(0, 102, 100);

  textSize(15);
  text("6", 0, 165);
  fill(0, 102, 100);

  textSize(15);
  text("9", -160, 10);
  fill(0, 102, 100);
}
