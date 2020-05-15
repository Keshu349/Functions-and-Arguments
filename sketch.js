var fixed
var moving 
var gameobj1
var gameobj2
var gameobj3

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,50,50);
  gameobj1 = createSprite(700,200,50,50);
  gameobj2 = createSprite(500,200,50,50);
  gameobj3 = createSprite(600,200,50,50);
}

function draw() {
  background("yellow");  
  moving.x = World.mouseX ;
  moving.y = World.mouseY ;
  if (isTouching(moving,fixed)){
    fixed.shapeColor = "red";
    moving.shapeColor = "blue";
  }
  if (isTouching(gameobj1,moving)){
    gameobj1.shapeColor = "green";
    moving.shapeColor = "blue";
  }
  if (isTouching(gameobj2,moving)){
    gameobj2.shapeColor = "purple";
    moving.shapeColor = "blue";
  }
  if (isTouching(gameobj3,moving)){
    gameobj3.shapeColor = "pink";
    moving.shapeColor = "blue";
  }
  drawSprites();
}

function isTouching (obj1,obj2){
  if (obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
    && obj1.y - obj2.y < obj1.height/2 + obj2.height/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2  ){
   return true
    }
    else{
      return false
    }
}