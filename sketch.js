const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var ground, ball
var dustbinImage, dustbin

function preload(){
	
}

function setup() {
	createCanvas(1200,600);

	engine = Engine.create();
	world = engine.world;

  dustbinPart2 = new Dustbin(900,490,130,10)
  ground = new Ground()
  ball = new Paper()

dustbinPart1 = Bodies.rectangle(815,490,10,150,{isStatic:true})
World.add(world,dustbinPart1)
dustbinPart3 = Bodies.rectangle(980,490,10,150,{isStatic:true})
World.add(world,dustbinPart3)
console.log(ground.position)
  
}


function draw() {
  background("white");
  Engine.update(engine); 
  
  ball.display();
  rectMode(CENTER)
  rect(dustbinPart1.position.x,dustbinPart1.position.y,10,200)
  rect(dustbinPart3.position.x,dustbinPart3.position.y,10,200)
  dustbinPart2.display()
  ground.display();
  

 drawSprites()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-50})
	}
}