var ball,img,paddle, edges;
function preload() {
  paddleImage=loadAnimation("paddle.png")
  ballImage=loadAnimation("ball.png")
}
function setup() {
  createCanvas(400, 400);
  paddle=createSprite(380,200,20,20)
  paddle.addAnimation("paddle.png",paddleImage)
  ball=createSprite(200,200,20,20);
  ball.addAnimation("ball", ballImage);
  ball.scale=0.5;
  ball.velocityX=3
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])

  
  if (ball.isTouching(paddle)){
  randomVelocity();
  }
  
  ball.bounceOff(paddle);
  
 paddle.y=mouseY 
 
  drawSprites();
  
}

function randomVelocity()
{ball.velocityY=random(-5,5)
}

