// Access the canvas in order to draw in it, will be using 2d context
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
console.log(`canvas made`);

// create plate object
var plate = new Plate(canvas, 400, 580);
console.log(" - - -- - -", plate);

// create var holding an image for our backeyPressedeyPressedground
var gameBackground = new Image();
gameBackground.src = "../img/city.jpg";

    

// If you try to call drawImage() before the image has finished loading, it won't do anything (or, in older browsers, may even throw an exception). So you need to be sure to use the load event so you don't try this before the image has loaded:
// When image has loaded, imediaately draw it to the canvas
const render = () => {
    context.drawImage(gameBackground, 0, 0, 900, 900);
    plate.render();
};

var drawEverything = function () {

    //render draws background
    render();

    // used in place of of onload, 
    requestAnimationFrame(drawEverything);
};

// when arrow key is pressed, listener catches it and takes action
window.addEventListener("keydown", moveSomething, false);
  
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            // left key pressed
            plate.x -= 20; 
            
            break;

        case 39:
            // right key pressed
            plate.x += 20
            break;

    }   
}   

drawEverything();
