class Drops {
    constructor(canvas, x, y, imageSrc) {

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = imageSrc;
    }

    updateY(dt) {
        // makes it fall
        this.y += 100 * dt;
    }

    render() {

        // draw the image in provided canvas with our values we made and we recieved
        var ctx = this.ctx;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    }

}