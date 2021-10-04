var current = " Sycamore fruit .";
function setup() { 
  
var myCanvas = createCanvas (windowWidth,windowHeight) 
myCanvas.parent("canvasDiv")

createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background('rgba(0,220,0,0.25)');
  textSize(48);
  textFont('Tangerine')
  textLeading(24 + sin(frameCount*0.10)*24);
  text('Sycamore fruit',mouseX,mouseY,100,100);

}

function keyTyped() {
  current += key;
}
