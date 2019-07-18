class Drops {
  constructor(x, y, imageSrc) {

    this.x = x;
    this.y = y;

    this.width = 50;
    this.height = 50;
    this.image = imageSrc;

  }

  getLeft() {
    return this.x;
  }
  getRight() {
    return this.x + this.width;
  }

  getBottom() {
    console.log("cats Y: ===-=-=-=-=-=-=-=-=-=-=-=-=-=", this.y)
    return this.y + this.height;
  }

  function checkCollision_Rec(x1,w1,y1,h1,x2,w2,y2,h2){
    //x1, x2           = Left
    //x1 + w1, x2 + w2 = Right
    //y1, y2           = Bottom
    //y1 - h1, y2 - h2 = Top
    
    
    if((y1 < y2)     || 
      ((y1 - h1) > y2) ||
       (x1 > (x2 + w2)) ||
      ((x1 + w1) < x2)
    ){
    //Is not colliding!
    }
    else{
    //Is colliding!
    }

}
