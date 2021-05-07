class Poly extends BaseClass {
    constructor(x,y){
  
      super(x,y,50,50);
      this.image = loadImage("images/polygon.png");
      Matter.Body.setMass(this.body.mass*3)
    }
  
    display() {
    
      super.display();
    }
  }
  