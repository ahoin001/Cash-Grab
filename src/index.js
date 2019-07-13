window.onload = function () {

    // Access the canvas in order to draw in it, will be using 2d context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // create var holding an image for our background
    var gameBackground = new Image();
    gameBackground.src = "../img/city.jpg";

    // If you try to call drawImage() before the image has finished loading, it won't do anything (or, in older browsers, may even throw an exception). So you need to be sure to use the load event so you don't try this before the image has loaded:
    gameBackground.onload = function () {
        context.drawImage(gameBackground, 0, 0, 900, 900);
    };

}

