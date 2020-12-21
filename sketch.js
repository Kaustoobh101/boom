const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car,ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13 ;
var bg = "sprites/bg1.png";
var score = 0;
var v = 10;
var  backgroundImage;
function preload() {
  backgroundImage=loadImage("boi.jpg") 
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
ground10=new Ground(5,375,750,PI)
ground11=new Ground(1195,375,750,PI)
ground12=new Ground(600,5,1200,PI/2);
ground13=new Ground(600,745,1200,PI/2);
Matter.Body.setStatic(ground9.body,false)
Matter.Body.setVelocity(ground9.body,{x:4,y:0})
}

function draw(){
    background(backgroundImage);
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
   ground10.display()
   ground11.display()
   ground12.display()
ground13.display()

if(keyIsDown(68)){
    
    Matter.Body.applyForce(car.body,car.body.position,{x:10,y:0})

}
if(keyIsDown(32)&&car.body.position.y>428){
    
  Matter.Body.applyForce(car.body,car.body.position,{x:0,y:-50})

}
if(keyIsDown(65)){
    
  Matter.Body.applyForce(car.body,car.body.position,{x:-10,y:0})

}
if(ground9.body.position.x<80){
  v=10
}
if(ground9.body.position.x>1110){
v=-10
}
Matter.Body.setPosition(ground9.body,{x:ground9.body.position.x+v,y:155})

}
//function keyPressed(){
    //if(keyCode===87){
  //  }
//}






