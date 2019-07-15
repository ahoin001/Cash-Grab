// Access the canvas in order to draw in it, will be using 2d context
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

/****************************/

// newly spawned drops will start at Y=25
var spawnLineY = 20;

// spawn a new drop every 1500ms
var spawnRate = 2000;

// set how fast the dropsArray will fall
var spawnRateOfDescent = 2.5;

// when was the last drop spawned
var lastSpawn = -1;

//  this array holds all spawned drops
var dropsArray = [];

//  save the starting time (used to calc elapsed time)
var startTime = Date.now();

const spawnRandomObject = () => {
    
    var img = new Image();   // Create new img element

    if ((Math.floor((Math.random() * 4)) + 1) === 1) {

        img.src = '../img/cat1.png'; // Set source path

    }
    else if ((Math.floor((Math.random() * 4)) + 1) === 2) {

        img.src = '../img/cat2.png'; // Set source path

    }
    else if ((Math.floor((Math.random() * 4)) + 1) === 3) {

        img.src = '../img/cat3.png'; // Set source path

    }

    // create the new drop object using this blueprint
    var drop = {

        // will select random image everytime a drop is created from png1-5
        image: img,

        // set x randomly but at least 15px off the canvas edges
        // 600 is my value canvas.width isnt working
        x: Math.random() * (600 - 30) + 15,

        // set y to start on the line where dropsArray are spawned
        y: spawnLineY,

    }

    // add the new drop to the dropsArray[] array
    dropsArray.push(drop);
}


function animate() {

    // get the elapsed time
    var time = Date.now();

    // see if its time to spawn a new drop
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
    }

    // draw the line where new dropsArray are spawned
    context.beginPath();
    context.moveTo(0, spawnLineY);
    context.lineTo(canvas.width, spawnLineY);
    context.stroke();

    // move each drop down the canvas
    for (var i = 0; i < dropsArray.length; i++) {
        var drop = dropsArray[i];
        drop.y += spawnRateOfDescent;
        context.beginPath();

        // draw random image drop
        context.drawImage(drop.image, drop.x, drop.y, 40, 40);
        context.closePath();
        context.fillStyle = drop.type;
        context.fill();
    }

}

/***************************************************** */

            // PLATE OBJECT AND GAME CANVAS

/***************************************************** */

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

    animate();

    // controlled infinite loop that keeps calling this function
    // in other words redraws background and plate
    requestAnimationFrame(drawEverything);
};

/***************************************************** */

            // MOVEMENT CODE

/***************************************************** */

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
