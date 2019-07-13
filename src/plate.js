class Plate {
    constructor(canvas,x,y) {
    
    // when this object is created, give it a canvas to refer too
    this.canvas = canvas; 
    this.ctx = canvas.getContext ("2d");
    
    // passsed in coordinates
    this.x = x; 
    this.y = y; 

    // width and height of plate when it is created
    this.width = 100; 
    this.height = 70; 
    
    // create instance of image
    this.image = new Image (); 

    // credit creator <a href=https://th.pngtree.com>กราฟิกจาก pngtree.com</a>
    this.image.src = "./image/Plate.png"; 
    }
    
    }