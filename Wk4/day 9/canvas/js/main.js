console.log("start canvas");

(function(){
    
    // creates a canvas element progammatically
	var canvas = document.createElement("canvas"); 
	// adds the canvas to the DOM 
	document.body.appendChild(canvas);
    // gain access to the canvas API 
    var ctx = canvas.getContext("2d");
    // set a width and height for the canvas
    canvas.width = 400;
    canvas.height = 400;

/*
    // create and draw the image 
    var qr = new Image();
    qr.src = "http://datamatrix.kaywa.com/img.php?s=8&d=http%3A%2F%2Ffullsail.edu";
    // add event listener to wait for the image to load, then display on the canvas
    qr.addEventListener('load', function(){
    	// x, y, width, height
    	ctx.drawImage(qr, 35, 25, 275, 275);
    }, false);
*/

	// draw two lines
	// starts drawing the path or resets the current path 
	ctx.beginPath();
	// set the stroke color
	ctx.strokeStyle = "#ff0000";
	// set the stroke size
	ctx.lineWidth = 2;
	// defines the starting point of the line 
	ctx.moveTo(200, 0);
	// defines the ending point of the line
	ctx.lineTo(200, 400);
	// render (draws) the line on the canvas
	ctx.stroke();

	// draw a green line 
	ctx.beginPath();
	ctx.strokeStyle = "#00ff00";
	ctx.lineWidth = 5;
	ctx.moveTo(0, 200);
	ctx.lineTo(400, 200);
	ctx.stroke();

	// draw a rectangle with fill and stroke
	ctx.beginPath();
	ctx.fillStyle = "#ff0000";
	// defines the rectangle (x, y, width, height)
	ctx.rect(175, 175, 50, 50);
	// renders the full
	ctx.fill();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "black";
	ctx.stroke();

	// draw a circle with stroke 
	ctx.beginPath();
	ctx.fillStyle = "rgb(0,0,255)";
	// default is black
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 8;
	// defines the arc at (x, y, radius, starting angle, ending angle)
	ctx.arc(300, 100, 40, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();

	// draw a triangle
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "orange";
	// define the starting point of line 1
	ctx.moveTo(300,274);
	// define the end point of line 1
	ctx.lineTo(350, 325);
	// define the end point of line 2
	ctx.lineTo(250, 325);
	// define the end pont of line 3 - take us back to where we started 
	ctx.lineTo(300, 275);
	// render the triangle
	ctx.stroke();
	// fill the triangle
	ctx.fillStyle = "#ff0000";
	ctx.fill();

	// simple rectangle
	ctx.fillStyle = "#aabbcc";
	ctx.fillRect(60, 75, 80, 50);
	ctx.stroke();

	// draw a circle with no stroke
	ctx.beginPath();
	ctx.fillStyle = "rgb(0,255,255)";
	ctx.arc(80, 300, 40, 0, 2*Math.PI);
	ctx.fill();

	// text filled
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.font = "14px Georgia";
	ctx.fillText("hello world", 45, 305);

	// erase canvas 
	ctx.clearRect(0, 0, 400, 400);

		
	
	for(var i = 0; i < 500; i++){

		var x1 = Math.random() * 400;
		var y1 = Math.random() * 400;	
		var x2 = Math.random() * 400;
		var y2 = Math.random() * 400;	

		var rgb1 = Math.floor(Math.random() * 255);
		var rgb2 = Math.floor(Math.random() * 255);
		var rgb3 = Math.floor(Math.random() * 255);

		ctx.beginPath();
		ctx.strokeStyle = "rgb("+rgb1+","+rgb2+","+rgb3+")";
		ctx.lineWidth = 1;
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
	}


})();














