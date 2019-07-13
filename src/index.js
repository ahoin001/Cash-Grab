// Access the canvas in order to draw in it, will be using 2d context
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

// create plate object
let plate = new Plate(canvas, 400, 580);

// create let holding an image for our backeyPressedeyPressedground
let gameBackground = new Image();
gameBackground.src = "../img/city.jpg";

//array of different drops
let dropsArray = [];

// If you try to call drawImage() before the image has finished loading, won't work 
// you need to be sure to use the load event so you don't try this before the image has loaded:
// When image has loaded, imediately draw it to the canvas

const drawEverything = () => {

    // draws background
    context.drawImage(gameBackground, 0, 0, 900, 900);

    // draws plate
    plate.render();

    // renders a new drop each time function is called
    for (var i = 0; i < dropsArray.length; i++) {
        dropsArray[i].render();
    }

    // controlled infinite loop that keeps calling this function
    // in other words redraws background and plate
    requestAnimationFrame(drawEverything);
};

// when arrow key is pressed, listener catches it and takes action
// intercepts loop so plate positin is updated before next loop
window.addEventListener("keydown", movePlate, false);

// function to be called when eventlistener senses key
function movePlate(e) {
    switch (e.keyCode) {

        //left key pressed
        case 37:
            if (plate.x > -50) {
                console.log(plate.x);
                plate.x -= 20;
            }
            break;
        // right key pressed
        case 39:
            if (plate.x < 560) {
                console.log(plate.x);
                plate.x += 20;
            }
            break;
        default:
            console.log("What are you doping?");
    }

}


drawEverything();
