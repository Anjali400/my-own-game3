const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bgi1,bgi2;
var bg1,bg2;
var jacky,bird,birdsGroup;
var sound,sound2;
var alien,aliensGroup;
var coin,coins,coinsGroup,coinsound;
var playb,bullet,bulimg,bulletGroup,bulsound;
var Form,game;
var database,bomsound;
var gameState = 0;
function preload(){
bgi1=loadImage("bg1.jpg")
jackimg=loadImage("p.png")
bgi2=loadImage("bg2.jpg")
bird=loadImage("bird.png")
sound=loadSound("sound.mp3")
sound2=loadSound("music.mp3")
alien=loadAnimation("alien1.png","alien1.png","alien2.png","alien2.png")
coin=loadAnimation("coin1.png","coin2.png","coin3.png")
playb=loadImage("icon3.jpg")
bulimg=loadImage("bullet.png")
bulsound=loadSound("sound3.mp3")
bomsound=loadSound("b.mp3")
coinsound=loadSound("coin.mp3")
}
function setup() {
 
  createCanvas(1300,545);
  engine = Engine.create()
  world = engine.world;
 
  database=firebase.database();
  game=new Game()
  game.getState();
  game.start();
}



function draw() {
  Engine.update(engine);
 background(bgi1);  
 if(gameState==1){
   clear()
   game.play()
 }
 drawSprites()
}