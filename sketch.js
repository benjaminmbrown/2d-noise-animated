var noiseScale = 0.01;
function setup() {
 
  createCanvas(600, 400);
  //noLoop();
  background(127);

}

function draw() {
	 for (var x=0; x < width; x++) {
	    var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale, 240);
	    stroke(noiseVal*255);
	    line(x, mouseY+noiseVal*80, x, height);
	  }

	

}

