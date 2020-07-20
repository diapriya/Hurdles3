class Hurdle{
    constructor(x,y,width,height){
     
      this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
      this.width = width;
      this.height = height;
      this.image = loadImage("./img/hurdle.png");
      World.add(world, this.body);
    }
  
    
  display(){
    var pos =this.body.position;
  
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);     
    image(this.image, pos.x,pos.y+30 ,this.image.width * 0.7,this.image.height*0.35);
  }
   
  }
  
  