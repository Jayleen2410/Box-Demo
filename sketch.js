var box;
function setup() {
  createCanvas(800,600);
  box = createSprite(200,134,20,34);
}

function draw() 
{
  background("blue");
  if (keyDown("right")) {
box.position.x = box.position.x +4;
  }
  if (keyDown("left")){
box.position.x = box.position.x -4;
  }
  if (keyDown ("up")){
  box.position.y = box.position.y  -4;
  }
  if (keyDown("down")){
    box.position.y = box.position.y +4;
  }
drawSprites();
}




