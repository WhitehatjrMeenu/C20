var fixedRect, movingRect;


function setup()
{
  createCanvas(1200,800);

  

  movingRect=createSprite(400,100,50,50);
  movingRect.shapeColor="green";
  movingRect.debug = true;

  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect.velocityY=2
  fixedRect.velocityY=-2;

  





  console.log("FixedRect.x"+ fixedRect.x);



 
  
}

function draw() 
{
  background("pink");  


 //movingRect.x = mouseX;
//movingRect.y = mouseY;

  console.log("MovingRect.x"+ movingRect.x);
  var distance = movingRect.x - fixedRect.x;
  console.log("Distance : "+  distance);

  
 /* if(movingRect.x-fixedRect.x< fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x <fixedRect.width/2+movingRect.width/2 )
   
  {
    //movingRect.shapeColor= "red";
    //fixedRect.shapeColor="red";

    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }*/
  

  if(movingRect.y-fixedRect.y< fixedRect.height/2 +movingRect.height/2 &&
    fixedRect.y-movingRect.y <fixedRect.height/2 +movingRect.height/2)
   
  {
    //movingRect.shapeColor= "red";
    //fixedRect.shapeColor="red";

    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
  }
  

  drawSprites();
}
