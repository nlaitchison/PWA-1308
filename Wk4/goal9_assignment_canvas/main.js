/*
	Nicole Aitchison
	Goal 9: Advance JavaScript
	PWA1 1308
	8/27/2013
*/

console.log("start canvas");

(function(){
    
    // creates a canvas element progammatically
	var canvas = document.createElement("canvas"); 
	// adds the canvas to the DOM 
	document.body.appendChild(canvas);
    // gain access to the canvas API 
    var ctx = canvas.getContext("2d");
    // set a width and height for the canvas
    canvas.width = 500;
    canvas.height = 450;

    // create and draw the image 
    var bg = new Image();
    bg.src = "bg.jpg";
    // add event listener to wait for the image to load, then display on the canvas
    bg.addEventListener('load', function(){
    	
    	// x, y, width, height
    	ctx.drawImage(bg, 0, 0, 500, 450);
    	// call function to display the chart/data
    	displayData();

    }, false);


    function displayData(){

    	// Array of data for the cart
    	// [Houston, Austin, Dallas, San Antonio]
    	var data = [47.84, 37.05, 33.65, 32.92];
    	// sets the initial x position for the bars in the chart 
    	var xPos = 100;

    	// sets the max height that the bars can be
    	var maxHeight = 280;

    	// for loop to go through the array and make a bar for each item
    	for(var i = 0, max = data.length; i < max; i++){
		  	
		  	// sets the height of the bar based on the percentage of the data to the max height
		  	var height = (280 * data[i]) / 100
		  	// cerate the bar
		   	ctx.beginPath();
			ctx.fillStyle = "#3c3c3c";
			ctx.fillRect(xPos, 380, 50, -height);
			ctx.stroke();

			// add to the xPos so each bar is evenly spaced out
			xPos += 95;
    	} 

    	// text for title
		ctx.fillStyle = "#ffffff";
		ctx.font = "18px Georgia";
		ctx.fillText("Average Annual Precipitation for Texas (inches)", 65, 40);

		// text for x-axis
		ctx.font = "15px Georgia";
		ctx.fillText("Houston", 95, 410);
		ctx.fillText("Austin", 198, 410);
		ctx.fillText("Dallas", 295, 410);
		ctx.fillText("San Antonio", 373, 410);
		
		//text for y-axis
		ctx.font = "16px Georgia";
		ctx.fillText("0", 40, 385);
		ctx.fillText("25", 35, 315);
		ctx.fillText("50", 35, 245);
		ctx.fillText("75", 35, 175);
		ctx.fillText("100", 30, 105);

    	// line for x-axis
    	ctx.beginPath();
		ctx.strokeStyle = "#292929";
		ctx.lineWidth = 2;
		ctx.moveTo(70, 380);
		ctx.lineTo(470, 380);
		ctx.stroke();

		// line for y-axis
		ctx.beginPath();
		ctx.strokeStyle = "#292929";
		ctx.lineWidth = 2;
		ctx.moveTo(70, 380);
		ctx.lineTo(70, 70);
		ctx.stroke();  
    }
   	

})();