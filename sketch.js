var bullet,wall;
var speed,weight,thickness;
var deformation;


function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 10);
 bullet.shapeColor = "white"
 wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor = (80,80,80) 

 speed = random(123,221);
 weight = random(30,52);
 thickness = random(22,83);
}


function draw() {
  background(0,0,0);
  stroke("white")
  textSize(20);
  fill("white");
 bullet.velocityX = speed;
   if(hasCollided()){
     
     bullet.velocityX = 0;
     //bullet.x = 70;
     deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness)
     if(deformation > 10){

      wall.shapeColor = "red";

     }

    if(deformation < 10){

      wall.shapeColor = "green";

    }
   }

   
   text("Results : " + wall.shapeColor,800,200);

 drawSprites();
  }
  
 


function hasCollided(){

if(bullet.x - wall.x < bullet.width/2 + wall.width/2 
  &&  wall.x - bullet.x < wall.width/2 + bullet.width/2
  && bullet.y - wall.y < bullet.height/2 + wall.height/2
  && wall.y - bullet.y <  bullet.height/2 + wall.height/2)
  {
   return true;
} else{
return false;
}
}