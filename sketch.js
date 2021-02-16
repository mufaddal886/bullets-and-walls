var bullet, wall;
var speed, height;






function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 50, 50);
  speed = random(55, 90);
  weight = random(400, 1500);
  thickness=random(22,83);
  bullet.velocityX = speed;
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = color(80, 80, 80);

}
function draw() {
  background("black");
  drawSprites();
  if(hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage=0.5 * weight * speed *speed/(thickness*thickness*thickness)
   if(damage>10){
     wall.shapeColor="red"
   }
   else{
     wall.shapeColor="green"
   }
  }
  drawSprites()



}
function hasCollided(lBullet,lWall){
bulletRightEdge=lBullet.x+lBullet.width
wallLeftEdge=lWall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
  
}
return false
}
