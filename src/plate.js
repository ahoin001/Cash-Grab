
class Plate {
    
    constructor(canvas, x, y) {

        // when this object is created, give it a canvas to refer too
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        // passsed in coordinates
        this.x = x;
        this.y = y;

        // width and height of plate when it is created
        this.width = 400;
        this.height = 170;

        // create instance of image
        this.image = new Image();

        // credit creator <a href=https://th.pngtree.com>กราฟิกจาก pngtree.com</a>
        this.image.src = "img/plate.png";

    }

    // update(dt) {

    // }
    

    render() {
        // use context of canvas passed in constructor
        let ctx = this.ctx;
        // draw image using context for the canvas passed in constructor
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

window.Plate = Plate;
console.log('asdf')