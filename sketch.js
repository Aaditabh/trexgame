var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudGroup, cloudImage;
var obatacle ,obstacleGroup, obstacle1png, obstacle2png,obstacle3png, obstacle4png, obstacle5png, obstacle6png; 

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
 cloudImage= loadImage("cloud.png")
 obstacle1png = loadImage("obstacle1.png")
 obstacle2png = loadImage("obstacle2.png")
 obstacle3png = loadImage("obstacle3.png") 
 obstacle4png = loadImage("obstacle4.png")
 obstacle5png = loadImage("obstacle5.png")
 obstacle6png = loadImage("obstacle6.png")
} 
 function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  cloudGroup = new Group();
  
}

function draw() {
  background(180);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
  spawnClouds()
  spawnObstacles()
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = random(80,120);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.addImage(cloudImage)
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudGroup.add(cloud)
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,180,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){case 1:obstacle.addImage(obstacle1png)
     break;           
     case 2:obstacle.addImage(obstacle2png)
        break;
     case 3:obstacle.addImage(obstacle3png)
        break; 
     case 4:obstacle.addImage(obstacle4png)
        break;            
     case 5:obstacle.addImage(obstacle5png)
        break;          
     case 6:obstacle.addImage(obstacle6png)
        break;default:break;          
                }
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
  }
}