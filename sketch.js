var walker;

function setup() {
 
  createCanvas(600, 400);
  //noLoop();
  background(127);

}

function draw() {
	console.log('Draing', xoff,yoff);
	loadPixels();
	var xoff = 0.0;

	for(var x = 0; x<width; x++){
			xoff += 0.01;
		var yoff=0.0;

		for (var y = 0; y<height;y++){
			yoff+=0.01;
			var bright = map(noise(xoff,yoff),0,1,0,255);
			pixels[x+y*width] = color(bright);
			
		}

	}

	updatePixels();

}

