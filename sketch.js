var canvasWH = 800;
function setup() {
  createCanvas(canvasWH, canvasWH);
}

function draw() {
  
  background(128);
  var mainCircle = 700;
  var halfCanvas = canvasWH / 2;
  circle(halfCanvas,halfCanvas, mainCircle);
  circle(halfCanvas,halfCanvas,mainCircle -30);
  
  circle(halfCanvas, halfCanvas, 190);
  circle(halfCanvas, halfCanvas, 160);
  
  //text()

  //
  push()
  translate(halfCanvas, halfCanvas);
  angleMode(DEGREES)
  rotate(9)
  angleMode(RADIANS)
  for (i = 0; i < 20; i++) {
    var x = mainCircle/2 * cos(TAU * 18*i / 360)
    var y = mainCircle/2 * sin(TAU * 18*i / 360)
    var xCentered = mainCircle * 0.53 * cos(TAU * (18*i +9)/ 360)
    var yCentered = mainCircle * 0.53 * sin(TAU * (18*i +9) / 360)
    line(0, 0, x, y)
    var fillcolor = i % 2;
    push()
    if(fillcolor == 0){
      fill(255,0,0)
    }
    else{
      fill(0,255,0)
    }
    
    arc(0, 0, mainCircle -30, mainCircle -30, (i-1)*18 * PI/180, 18*i * PI/180)
    pop()
    push()
    translate(xCentered,yCentered)
    angleMode(DEGREES)
    rotate(-9)
    angleMode(RADIANS)
    textAlign(CENTER, CENTER)
    textSize(20)
    text(i+1, 0,0)
    pop()
  }
  pop()

  circle(halfCanvas,halfCanvas,60);
  circle(halfCanvas,halfCanvas,30);
  
}