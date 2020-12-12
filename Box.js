class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution: 1,
        friction:0.3,
        denstity:0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }


  display(){
    
    rectMode(CENTER);
    fill("yellow");

    if(this.body.speed < 3){
     
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0,0,this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         pop();
      
       }



      }
     
    
  
}

