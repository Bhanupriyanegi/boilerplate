
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var object2;
var object1;
var object3;
var object4;
var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object1= Bodies.rectangle(100,100,50,50)
  object2= Bodies.rectangle(200,200,50,50)
  object3= Bodies.circle(300,300,50)
  object4= Bodies.circle(400,200,50)
  World.add(world,object1)
  World.add(world,object2)
  World.add(world,object4)
  World.add(world,object3)
  console.log(object1);
  console.log(object1.position.x);
  console.log(object1.position.y);
  
}
function draw()
{
  Engine.update(engine); 
  background(0);
  rectMode(CENTER);
    fill("blue")
    rect(object1.position.x,object1.position.y,50,50);
  
    fill("purple")
    rect(object2.position.x,object2.position.y,50,50);
    fill("yellow")
    circle(object3.position.x,object3.position.y,100)
    fill("cyan")

    circle(object4.position.x,object4.position.y,100)
}