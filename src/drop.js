class Drops {
    constructor(canvas, x, y) {

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = new Image();
        // will select random image by returning number 1-5
        this.image.src = "../image/cat"+(Math.floor((Math.random()*6))+1)+".png";

    }

    updateY(dt) {
        this.y += 100*dt;
    }

    render() {
        
        var ctx = this.ctx;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

    }

}