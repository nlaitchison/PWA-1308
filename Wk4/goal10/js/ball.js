function Ball (radius, color){

	// default ball size
	if(radius === undefined) {radius = 40;}
	// default color
	if(color === undefined) {color = "#ff0000";}

	// set ball properties 
	this.x = 0;
	this.y = 0; 
	this.radius = radius;
	this.vx = 0;
	this.vy = 0;
	this.color = color;
	this.lineWidth = 1;
};

// basically creates a ball on the canvas
Ball.prototype.update = function(context){

	context.lineWidth = this.lineWidth;
	context.fillStyle = this.color;
	context.beginPath();

	// x, y, radius, start angle, end angle, anti-clockwise
	context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true);
	context.closePath();
	context.fill();

};
