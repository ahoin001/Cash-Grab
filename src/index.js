// Access the canvas in order to draw in it, will be using 2d context
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

/****************************/

// newly spawned objects start at Y=25
var spawnLineY = 25;

// spawn a new object every 1500ms
var spawnRate = 1500;

// set how fast the objects will fall
var spawnRateOfDescent = 0.50;

// when was the last object spawned
var lastSpawn = -1;

//  this array holds all spawned object
var objects = [];

//  save the starting time (used to calc elapsed time)
var startTime = Date.now();

// start animating
// animate();

const spawnRandomObject = () => {
    // select a random type for this new object
    var t;

    // About Math.random()
    // Math.random() generates a semi-random number
    // between 0-1. So to randomly decide if the next object
    // will be A or B, we say if the random# is 0-.49 we
    // create A and if the random# is .50-1.00 we create B

    if (Math.random() < 0.50) {
        t = "red";
    }
    else {
        t = "blue";
    }

    // create the new object
    var object = {
        // set this objects type
        type: t,
        // set x randomly but at least 15px off the canvas edges
        //600 is my value canvas.width isnt working
        x: Math.random() * (600 - 30) + 15,
        // set y to start on the line where objects are spawned
        y: spawnLineY,
    }

    // add the new object to the objects[] array
    objects.push(object);
}


function animate(){

    // get the elapsed time
    var time=Date.now();

    // see if its time to spawn a new object
    if(time>(lastSpawn+spawnRate)){
        lastSpawn=time;
        spawnRandomObject();
    }

    // request another animation frame
    //requestAnimationFrame(animate);

    // clear the canvas so all objects can be 
    // redrawn in new positions
    //ctx.clearRect(0,0,canvas.width,canvas.height);

    // draw the line where new objects are spawned
    context.beginPath();
    context.moveTo(0,spawnLineY);
    context.lineTo(canvas.width,spawnLineY);
    context.stroke();

    // move each object down the canvas
    for(var i=0;i<objects.length;i++){
        var object=objects[i];
        object.y+=spawnRateOfDescent;
        context.beginPath();
        context.arc(object.x,object.y,8,0,Math.PI*2);
        context.closePath();
        context.fillStyle=object.type;
        context.fill();
    }

}




/***************************************************** */


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

    animate();
    // renders a new drop each time function is called
    // for (var i = 0; i < dropsArray.length; i++) {
    //     dropsArray[i].render();
    // }

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
