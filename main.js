var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;

var rover_x = 10;
var rover_y = 10;

var background_image = "mars.jpg";
var rover_image = "rover.png";

var background_imgTag = new Image();
var rover_imgTag = new Image();

function add(){
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}