var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var r1, r2, r3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0, isStatic:true, friction:0.5});
	World.add(world, packageBody);
	

	///Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	r1 = new redZone(400,650,200,20);
	r2 = new redZone(310,610,20,100);
	r3 = new redZone(490,610,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  

  r1.display();
  r2.display();
  r3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}
