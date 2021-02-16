
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, fish1;
var bgImg1,platform;
var penguin1, slingshot;
var b1,block1;
var score = 0;
var chance = 10;
var gameState = "Play";


function preload() {
    bgImg1 = loadImage("bgimage.jpg");
    bgImg2 = loadImage("bg2.jpg");
    bgImg3 = loadImage("bg3.jpg");

}

function setup() {
  createCanvas(1400,665);
  engine = Engine.create();
  world = engine.world;

  penguin1 = new Penguin(120,465)
  ground = new Ground(690,650,1800,30)
 
  block1 = new Block1(650,505,220)
  block2 = new Block1(850,505,220)
  block3 = new Block1(882,505,220)
  block4 = new Block1(1082,505,220)
  block5 = new Block1(1114,505,220)
  block6 = new Block1(1314,505,220) 
 
  block9 = new Block1(850,258,220)
  block10 = new Block1(882,258,220)
  block11 = new Block1(1082,258,220)
  block12 = new Block1(1114,258,220)
 
 
 b1 = new Box (982,392,800,27)
 b2 = new Box (984,120,260,27)
 b3 = new Box (740,375,200,27)
 b4 = new Box (1240,375,200,27)
 b5 = new Box (982,110,180,25)
 b6 = new Box (982,100,80,25)

 
  fish1 = new Fish(550,560);
  fish2 = new Fish(750,560);
  fish3 = new Fish(990,560);
  fish4 = new Fish(1220,560);
  fish5 = new Fish(750,300);
  fish6 = new Fish(990,330);
  fish7 = new Fish(1220,300);

 slingshot = new SlingShot(penguin1.body,{x:120, y:465});


}

function draw() {

  Engine.update(engine);
  if(gameState === "Play"){
    background(bgImg1);

  fill("black");
  textSize(20)
  text("SCORE = "+ score, 1250,70);
  
  fill("green");
  textSize(21)
  text("CHANCES - "+ chance, 50,220);
  stroke("white") 
  strokeWeight(4)
  fill("blue");
  textSize(25)
  textFont("Drag the Penguin towards the Basket of Fish to SCORE POINTS!!")
  text("DRAG  THE  PENGUIN  TOWARDS  THE  BASKET  OF  FISH  'POWERFULLY'  TO  SCORE POINTS!!!", 50,50);
   
  stroke("red") 
  strokeWeight(3)
  fill("white");
  textSize(20)
  text("Press  'SPACE  To  Get  A  Second  Chance  To  Play ! ", 50,130);
 
  drawSprites();

  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  penguin1.display();

  fish1.display();
  fish1.score();
  fish2.display();
  fish2.score();
  fish3.display();
  fish3.score();
  fish4.display();
  fish4.score();
  fish5.display();
  fish5.score();
  fish6.display();
  fish6.score();
  fish7.display();
  fish7.score();

  slingshot.display();

  if(score === 120){
    gameState = "Win"
  }
  if(chance === 0){
    gameState = "Lose"
  }

  }
  if(gameState=== "Win"){
    background(bgImg2)
  }
  if(gameState === "Lose"){
    background(bgImg3);

  }
  
}


function mouseDragged(){
  if(gameState === "Play"){
  Matter.Body.setPosition(penguin1.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  if(gameState === "Play"){
  slingshot.fly();
  }
}

function keyPressed(){
 if(gameState === "Play"){
    if(keyCode === 32){
      Matter.Body.setPosition(penguin1.body, {x: 115, y:465});
      slingshot.attach(penguin1.body);
      chance = chance-1
  }
}
}