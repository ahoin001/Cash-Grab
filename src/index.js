// Access the canvas in order to draw in it, will be using 2d context
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

// create plate object
let plate = new Plate(canvas, 400, 580);

// create let holding an image for our backeyPressedeyPressedground
let gameBackground = new Image();
gameBackground.src = "../img/city.jpg";

// If you try to call drawImage() before the image has finished loading, won't work 
// you need to be sure to use the load event so you don't try this before the image has loaded:
// When image has loaded, imediately draw it to the canvas

const drawEverything = () => {

    // draws background
    context.drawImage(gameBackground, 0, 0, 900, 900);

    // draws plate
    plate.render();

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
        case 37:
            // left key pressed
            plate.x -= 30

            break;

        case 39:
            // right key pressed
            //same as above, just practicing using object

            // add 30 to the x position in plate object
            plate.update((plate.x) + 30)


            break;

    }
}

drawEverything();
