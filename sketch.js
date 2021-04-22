var movingrect
var stablerect 

function setup() {
  createCanvas(800,400);
  stablerect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(300,200,25,40);
  
}

function draw() {
  background(255,255,255);
  //console.log(movingrect.width/2 + stablerect.width/2);
  console.log(movingrect.x - stablerect.x);

  movingrect.y = mouseY;
  movingrect.x = mouseX; 
  if(movingrect.x - stablerect.x < movingrect.width/2 + stablerect.width/2 
    && stablerect.x - movingrect.x  < movingrect.width/2 + stablerect.width/2 
    && movingrect.y - stablerect.y < movingrect.height/2 + stablerect.height/2 
    && stablerect.y - movingrect.y  < movingrect.height/2 + stablerect.height/2 ){
    movingrect.shapeColor = "orange";
    stablerect.shapeColor = "purple";
  }
  else{
    movingrect.shapeColor = "grey";
    stablerect.shapeColor = "grey"; 
  }
  drawSprites();
}