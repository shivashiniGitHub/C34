const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4;

var ball1;

var rope1;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,590,1200,20);

    box1 = new box(800,580,75,75);
    box2 = new box(890,580,75,75);
    box3 = new box(980,580,75,75);
    box4 = new box(1070,580,75,75);

    box5 = new box(800,500,75,75);
    box6 = new box(890,500,75,75);
    box7 = new box(980,500,75,75);
    box8 = new box(1070,500,75,75);

    box9 = new box(800,420,75,75);
    box10 = new box(890,420,75,75);
    box11 = new box(980,420,75,75);
    box12 = new box(1070,420,75,75);

    ball1 = new ball(600,300,50,50);

    rope1 = new rope(ball1.body,{x:600,y:300});
   

    



    
}

function draw(){
    
        background("white");
    
       
        
    
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    ball1.display();

    rope1.display();

}

function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 rope1.fly();
}
