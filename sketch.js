var boxs
function setup() {
  createCanvas(400,400);
   boxs = createSprite(200,200,30,30)
}

function draw()
{
  background("red");
  if(keyDown(RIGHT_ARROW)){
    boxs.position.x = boxs.position.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    boxs.position.x = boxs.position.x-5
  }
  if(keyIsDown(UP_ARROW)){
    boxs.position.y = boxs.position.y-5
  }
  if(keyIsDown(DOWN_ARROW)){
    boxs.position.y = boxs.position.y+5
  }
    drawSprites()

}




