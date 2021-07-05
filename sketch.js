const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var bg;
var snowball = [];

var music;



function preload(){
  bg=loadImage("snow2.jpg");
  music=loadSound("sound.mp3");
 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 
}

function draw() {
  background(bg);  

  Engine.update(engine);

music.play();
 
  //create Snow objects
 
  if(frameCount%20===0){
   snowball.push(new Snow (random(width+1, 0), 10,10));
  }

 for (var j = 0; j <snowball.length; j++) {
  
   snowball[j].display();
  }
  drawSprites();
}