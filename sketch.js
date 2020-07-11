var bullet;
var wall,thickness;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
thickness = random(22,83);
speed = random(21,30);
weight = random(32,52);
bullet = createSprite(50,200,50,5);
bullet.shapeColor = color("white");
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);
bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if (hasCollided(bullet,wall)){
    var deformation = 0.5 * weight * speed *speed/(thickness*thickness*thickness);
    
    if (deformation>2){
    bullet.shapeColor = color("green");
    bullet.velocityX = 0;
      }
    if (deformation<2 ){
      bullet.shapeColor = color("red");
      bullet.velocityX = 0;
      }
  }
  
      
drawSprites();
  }
function hasCollided(a,b){
var  bulletLeftEdge = a.x+a.width; 
var wallLeftEdge = b.x;
if (bulletLeftEdge>=wallLeftEdge){
  return true;
}
else {
  return false;
}
}