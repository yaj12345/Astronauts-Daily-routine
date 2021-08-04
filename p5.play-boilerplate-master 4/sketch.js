

var astronaut, bg, sleep,brush, gym,eat,drink,move ;
 

function preload(){
bg= loadImage("Astronaut's daily routine 2/iss.png")
sleep= loadAnimation("Astronaut's daily routine 2/sleep.png") 
brush= loadAnimation("Astronaut's daily routine 2/brush.png") 
gym= loadAnimation ("Astronaut's daily routine 2/gym11.png","Astronaut's daily routine 2/gym12.png")
eat= loadAnimation("Astronaut's daily routine 2/eat1.png","Astronaut's daily routine 2/eat2.png")
drink= loadAnimation("Astronaut's daily routine 2/drink1.png","Astronaut's daily routine 2/drink2.png") 
move= loadAnimation("Astronaut's daily routine 2/move.png","Astronaut's daily routine 2/move1.png") 
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
astronaut= createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;
}

// all if part is to be written in draw function, not another seperate function 
// moving= 1 velocity for x and y , 0 for x and y for all other keys

function draw() {
  background(bg);  

  drawSprites();
  edges= createEdgeSprites();
  astronaut.bounceOff(edges);  
  
  if(keyDown("UP_ARROW")){
astronaut.addAnimation("sleeping",sleep);
  astronaut.changeAnimation("sleeping"); 
 astronaut.y=350

 astronaut.velocityX=0;
 astronaut.velocityY=0;   
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("brushing",brush);
      astronaut.changeAnimation("brushing"); 
     astronaut.y=350

     astronaut.velocityX=0;
     astronaut.velocityY=0;   
      }



   if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
      astronaut.changeAnimation("gymming"); 
     astronaut.y=350

     astronaut.velocityX=0;
     astronaut.velocityY=0;   
      }

 

  if(keyDown("LEFT_ARROW")){
            astronaut.addAnimation("eating",eat);
              astronaut.changeAnimation("eating"); 
             astronaut.y=350

             astronaut.velocityX=0;
             astronaut.velocityY=0;   
              }

   if(keyDown("M")){
    astronaut.addAnimation("moving",move);
      astronaut.changeAnimation("moving"); 
       astronaut.y=350

        astronaut.velocityX=1
            astronaut.velocityY=1   
                  }
                         



 
}