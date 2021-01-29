class Game{
    constructor(){}

    
    getState(){
      var gameStateRef=database.ref('gameState');
      gameStateRef.on("value",function(data){
      gameState=data.val();
      })
  }
  update(state){
      database.ref('/').update({gameState:state});
  }

async start(){
if(gameState==0){
  Form=new form()
  Form.display()
  
}
 
bg1=createSprite(600,300,1300,600)
bg1.addImage("bg",bgi1)
bg1.scale=1.3
  

    bg2=createSprite(600,10,1200,600)
    bg2.addImage("bg",bgi2)
    bg2.scale=1.3
    bg2.visible=false
    
    jacky=createSprite(600,300)
    jacky.addImage("jack",jackimg)
    jacky.scale=0.2;
    jacky.visible=false
    
    
   
    
    birdsGroup=createGroup()
    aliensGroup=createGroup()
    coinsGroup=createGroup()
    bulletGroup=createGroup()
   
}
  


 
 


  play(){
   Form=new form() 
      Form.hide()
spawnaliens()
spawncoins()
spawnbirds()
jacky.velocityY=0



//moving background
bg2.velocityX = -10

//making background as never ending background
if (bg2.x < 0){
  bg2.x = bg2.width/2;
}




//giving condition for moving jacky 
if(keyDown("UP_ARROW")){
  jacky.velocityY=-12 
}

if(keyDown("DOWN_ARROW")){
  jacky.velocityY=+12  
}

if (keyDown("space")) {
  createBullet();
  bulsound.play()
  
}

if (bulletGroup.isTouching(aliensGroup)) {
  bomsound.play()
  bulletGroup.destroyEach();
 aliensGroup.destroyEach();
}

if (jacky.isTouching(coinsGroup)) {
 coinsGroup.destroyEach()
  coinsound.play()
 
}

drawSprites()

//spawnbirds.hide()

function spawnbirds() {

if (frameCount % 200 === 0) {
  var birds = createSprite(1000,160,40,10);
  birds.y = Math.round(random(30,120));
  birds.addImage("bird",bird);
  birds.scale = 0.02;
  birds.velocityX = -3;
  birds.lifetime = 400;

 birdsGroup.add(birds);


 
}
}

function spawnaliens() {

if (frameCount % 300 === 0) {
  var aliens = createSprite(1000,160)
  aliens.y = Math.round(random(20,370));
  aliens.addAnimation("alien",alien);
  aliens.scale = 0.4;
  aliens.velocityX = -3;

  aliens.lifetime = 400;
  aliensGroup.add(aliens);

   
}
}

function spawncoins() {

if (frameCount % 200 === 0) {
  var coins = createSprite(1200,10)
  coins.y = Math.round(random(20,370));
  coins.addAnimation("coin",coin);
  coins.scale = 0.3;
  coins.velocityX = -3;
  coins.lifetime = 400;
   coinsGroup.add(coins);
   
}

}

function createBullet() {
  var bullet= createSprite(400, 100, 60, 10);
  bullet.addImage(bulimg);
  bullet.x =jacky.x
  bullet.y=jacky.y;
 
  bullet.velocityX = 4;
  bullet.lifetime = 200;
  bullet.scale = 0.1;
  bulletGroup.add(bullet)
  return bullet;
  
}

}
}