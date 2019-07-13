

    // Access the canvas in order to draw in it, will be using 2d context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    console.log(`canvas made`);

    // create var holding an image for our backeyPressedground
    var gameBackground = new Image();
    gameBackground.src = "../img/city.jpg";

    // create plate 
    var plate = new Plate(canvas, 400, 580);
    console.log(" - - -- - -", plate);

    // If you try to call drawImage() before the image has finished loading, it won't do anything (or, in older browsers, may even throw an exception). So you need to be sure to use the load event so you don't try this before the image has loaded:
    // When image has loaded, imediaately draw it to the canvas
    const render = () => {
        context.drawImage(gameBackground, 0, 0, 900, 900);
    };

    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.WebkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    var drawEverything = function () {
        //render draws background
        render();
        plate.render()
        // TODO : Why use this instead of onload
        requestAnimationFrame(drawEverything);
    };

    // add listener for canvas to keep track of keys pressed
    canvas.addEventListener("keydown", function (e) {

        // var to hold what key was pressed
        var keyPressed = e.keyPressedeyCode;

        // left key pressed
        if (keyPressed === 37 || keyPressed === 65) {
            // move left
            Plate.x -= 10;
        }
        // right key pressed
        else if (keyPressed === 39 || keyPressed === 68) {
            // move right
            Plate.x += 10;
        }

    }, false);

    drawEverything();
