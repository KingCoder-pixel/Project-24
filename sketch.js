
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paperObject, paper, ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(100, 590, 30);
	ground = new Ground(400, 650, 50, 850);
	dustbin1 = new Dustbin(500, 585, 20, 100);
	dustbin2 = new Dustbin(600, 625, 220, 20);
	dustbin3 = new Dustbin(700, 585, 20, 100);
	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  
  
  
  
  
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position,{x:35, y:-35});
		
		
		
	}
}



