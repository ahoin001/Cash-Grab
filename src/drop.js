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

  

}
