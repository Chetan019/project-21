var bg, bgImage;
var astronaut, astronaut_bathing, astronaut_eating, astronaut_gymming, astronaut_sleeping, astronaut_brushing, astronaut_drinking;
var bath, eat, gym, sleep, brush, move;






function preload(){
  bgImg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  drink= loadAnimation("images/drink1.png","images/drink2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  move = loadAnimation("images/move.png","images/move1.png");


}





function setup() {
  createCanvas(400, 400);
   bg = createSprite(400, 400);
   bg.velocityX = 0;
   bg.velocityY = 0;
   bg.addImage("bgImg" ,bg);
  

  astronaut = createSprite(300, 230);
  astronuat.addAnimation("sleeping" , sleep);
  astronaut.scale = 0.1;


}

function draw(){
  background(0);
  edges= createEdgeSprites();
    astronaut.collide(edges);
  


if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}



if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bath");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("M_KEY")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX = 20;
  astronaut.velocityY = -10
  
}
drawSprites();
}