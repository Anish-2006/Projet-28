
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, Stone,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;


function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  
  

	Stone=new STONE(240,425,30); 

	mango1=new Mango(870,265,30);
  mango2=new Mango(940,285,40);
	mango3=new Mango(910,200,30);
	mango4=new Mango(1010,180,40);
	mango5=new Mango(1050,260,30);
	mango6=new Mango(1100,190,40);
	mango7=new Mango(1130,240,30);
	mango8=new Mango(1220,210,40);
	mango9=new Mango(1110,100,40);
	mango10=new Mango(1000,90,30);


	treeObj=new Tree(1050,590);
	groundObject=new ground(width/2,600,width,20);

  launcher = new Launcher(Stone.body,{x:240,y:430});


	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  fill("black");
  text("Press Space to get a second Chance to Play!",50 ,50);
  image(boy ,200,355,210,320);
  

  treeObj.display();
  Stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


  groundObject.display();
    
  launcher.display();


  detectollision(Stone,mango1);
  detectollision(Stone,mango2);
  detectollision(Stone,mango3);
  detectollision(Stone,mango4);
  detectollision(Stone,mango5);
  detectollision(Stone,mango6);
  detectollision(Stone,mango7);
  detectollision(Stone,mango8);
  detectollision(Stone,mango9);
  detectollision(Stone,mango10);
  
}

function mouseDragged(){

  Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  launcher.fly();

}


function keyPressed(){

  if(keyCode === 32){

   Matter.Body.setPosition(Stone.body,{x:235,y:420});
   launcher.attach(Stone.body);

  }


}


  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }