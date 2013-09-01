//canvas painter

(function() {
   
   var canvas = document.createElement("canvas");
   document.body.appendChild(canvas);
   canvas.width = 640;
   canvas.height = 480;
   var ctx = canvas.getContext("2d");

   // set bg color 
   ctx.fillStyle = '#cccccc';
   ctx.fillRect(0,0,640,480);

   // the getMouse funciton which returns an object literal that has x and y of the mouse
   var mouse = utils.getMouse(canvas);
   // boolean that holds the status of whether or not the mouse is being clicked
   var draw = false;

   var color = "rgb(255,0,0)";
   ctx.strokeStyle = color;

   canvas.addEventListener("mousedown", onDraw);
   canvas.addEventListener("mouseup", onStopDraw);
   canvas.addEventListener("mouseout", onStopDraw);

   function onDraw(e){
   		draw = true;
   		ctx.beginPath();
   		ctx.moveTo(mouse.x, mouse.y);
   };
   
   function onStopDraw(e){
   		draw = false;
   };

   (function update(){
   		
   		if(draw){
   			ctx.lineTo(mouse.x, mouse.y);
   			ctx.stroke();
   		}

   		// function that runs 60 frames per second
   		requestAnimationFrame(update);
   })();

})();