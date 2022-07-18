var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50)
  box.shapeColor="red"
}

function draw() 
{
  background(128);
  if(keyDown("up")){
    box.y-=2
  }
  if(keyDown("down")){
    box.y+=2
  }
  if(keyDown("left")){
    box.x-=2
  }
  if(keyDown("right")){
    box.x+=2
  }
drawSprites()
}




