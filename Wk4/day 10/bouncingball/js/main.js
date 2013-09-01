/**
 * User: imtloaner127
 * Date: 6/26/13
 * Time: 5:00 PM
 * To change this template use File | Settings | File Templates.
 */

console.log("start chart main.js");

(function (){
    
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    ball = new Ball(25, "#0000ff"), 
    vx = Math.random() * 20 - 5,
    vy = Math.random() * 20 - 5;

    ball.x = canvas.width * .5;
    ball.y = canvas.height * .5;

    (function update(){
    	
    	// clear canvas before drawing every frame
    	ctx.clearRect(0 , 0, canvas.width, canvas.height);
    	var left = 0,
    	right = canvas.width,
    	top = 0,
    	bottom = canvas.height;

    	ball.x += vx;
    	ball.y += vy;

    	// check collision against edges of canvas 
    	if(ball.x + ball.radius > right){
    		ball.x = right - ball.radius;
    		vx *= -1;
    	}
    	else if(ball.x - ball.radius < left){
    		ball.x = left + ball.radius;
    		vx *= -1;
    	}

    	if(ball.y + ball.radius > bottom){
    		ball.y = bottom - ball.radius;
    		vy *= -1;
    	}
    	else if(ball.y - ball.radius < top){
    		ball.y = top + ball.radius;
    		vy *= -1;
    	}

    	// redraw the ball
    	ball.update(ctx);
    	// function that runs 60 frames a second 
    	requestAnimationFrame(update);

    })();

})();
