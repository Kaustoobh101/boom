const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car,ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9;
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,750);
    engine = Engine.create();
    world = engine.world;
    
car=new Wheel(50,150,20);
ground1=new Ground(100,460,200,PI/2);
ground2=new Ground(240,420,100,PI/4);
ground3=new Ground(1100,460,200,PI/2);
ground4=new Ground(685,350,100,PI/2);
ground5=new Ground(685,400,100,PI/2);
ground6=new Ground(780,323,100,PI/3);  
ground7=new Ground(280,350,100,PI/12)
ground8=new Ground(280,275,100,-PI/11)
ground9=new Ground(200,160,100,PI/2);

Matter.Body.setVelocity(ground9.body,4)
}

function draw(){
    background(0);
    fill(255)
    text(mouseX+","+mouseY,mouseX,mouseY)
    
    Engine.update(engine);
   car.display();
   ground1.display();
   ground2.display();
   ground3.display();
   ground4.display();
   ground5.display();
   ground6.display();
   ground7.display()
   ground8.display()
   ground9.display()
if(keyIsDown(68)){
    
    Matter.Body.applyForce(car.body,car.body.position,{x:15,y:0})

}
}
//function keyPressed(){
    //if(keyCode===87){
  //  }
//}






