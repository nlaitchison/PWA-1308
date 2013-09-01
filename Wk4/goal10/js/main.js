/**
    Nicole Aitchison
    PWA 1 1308
    8/29/2013 
    Goal 10
 */

console.log("start chart main.js");

(function (){
    
    // create the canvas
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    // create the ball and set the value it'll move by
    ball = new Ball(25, "#0000ff"), 
    vx = 15,
    vy = 15;

    // set the balls position
    ball.x = canvas.width * .5;
    ball.y = canvas.height * .5;

    // initially add the ball to the canvas
    ball.update(ctx);

    // var to detect what key has been pressed
    window.addEventListener('keydown', function (e) {

        // left
        if (e.keyCode === 37){
            moveBall("left");
        }
        // up
        if (e.keyCode === 38){
            moveBall("up");
        }
        // right
        if (e.keyCode === 39){
            moveBall("right");
        }
        // down
        if (e.keyCode === 40){
            moveBall("down");
        }

    }, false);

    // function to move the ball, pass in the direction it should move
    function moveBall(dir){

        // clear canvas before drawing every frame
        ctx.clearRect(0 , 0, canvas.width, canvas.height);
        var left = 0,
        right = canvas.width,
        top = 0,
        bottom = canvas.height;

        // add or subtract to the x or y based on the direction
        if(dir === "left"){
            ball.x -= vx;
        }
        else if(dir === "right"){
            ball.x += vx;
        }
        else if(dir === "up"){
            ball.y -= vx;
        }
        else if(dir === "down"){
            ball.y += vx;
        }

        // put the ball on the canvas again
        ball.update(ctx);
    };

})();
