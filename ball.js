class ball{
    constructor(x,y,width,height){
     var option = {
     frictionAir:0.005,
     density:0.5
     }
this.body = Bodies.rectangle(x,y,width,height,option);
this.width = width;
this.height = height;
World.add(world,this.body);
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
strokeWeight(5);
stroke("black");
ellipseMode(RADIUS);
fill("red");
ellipse(0,0,this.width,this.height);
pop();












}

}