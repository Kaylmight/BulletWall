var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1200,400);
  thickness = random(22,83)
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80)

  speed = random(223,321);
  weight = random(30,52);

bullet = createSprite(0, 200, 20, 20)
bullet.shapeColor = 'white'
bullet.velocityX = speed;

}


function draw() {
  background(0);
  if(hasCollide(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor = 'red'
    }
    else{
      wall.shapeColor = 'green'
    }
  }  
  
  drawSprites();
}

function hasCollide(object1, object2){
  var object1rightEdge = object1.x+object1.width;
  var object2leftEdge = object2.x;

  if(object1rightEdge > object2leftEdge){
    object1.velocityX = 0;
    return true
  }
  else{
    return false
  }
}