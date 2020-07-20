class Play {
  constructor(x,y,width,height){
   
    this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
    this.width = width;
    this.height = height;
    this.image = loadImage("./img/images.png");

    World.add(world, this.body);
  }
 
  
display(){
  var pos =this.body.position;

  rectMode(CENTER);
  rect(pos.x, pos.y, this.width, this.height);
  imageMode(CENTER);     
  image(this.image, pos.x,pos.y ,this.image.width * 0.7,this.image.height * 0.35);
}
 
}

