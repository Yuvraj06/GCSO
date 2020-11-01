var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1000,400);
  speed=random(55,90);
  weight=random(400, 1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(950, 200, 60, height/2);
  car.velocityX = speed;
 
  wall
}

function draw() {
  background("lightblue");  

  if(wall.x-car.x < wall.width/2+car.width/2){
    car.velocityX=0;

    deformation= 0.5*weight*speed*speed/22500;

    if(deformation<100){
      car.shapeColor="green";
    }else if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }else if(deformation>180){
      car.shapeColor="red";
    }

  }

  

  drawSprites();
}