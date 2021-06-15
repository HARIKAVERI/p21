
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ground,leftside,rightside
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitituion:0.3,
	friction:0,
	density:1.2
}
ball1=Bodies.circle(260,100,20,ball_options)
World.add(world,ball1)
ground=new Ground(800,670,1600,20)
leftside=new Ground(1100,600,20,120)
rightside=new Ground(1350,600,20,120)

	Engine.run(engine);
  ellipseMode(RADIUS)
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball1.position.x,ball1.position.y,20)
  ground.display();
  leftside.display();
  rightside.display();
  drawSprites();
 
}
function keyPreesed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1,ball1.position,{x:85,y:-85})
	}
}



