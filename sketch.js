
var Tom, Jerry;
var BgImg, mouse1Img, mouse2Img, mouse3Img, cat1Img, cat2Img, cat3Img;


function preload() {
  cat1Img = loadImage("images/cat1.png");
  cat2Img = loadImage("images/cat2.png","images/cat3.png");
  cat3Img = loadImage("images/cat4.png")

  BgImg = loadImage("images/garden.png")

  mouse1Img = loadImage("images/mouse1.png");
  mouse2Img = loadImage("images/mouse3.png","images/mouse2.png");
  mouse3Img = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

     Tom = createSprite(800,650,10,10);
     Tom.addImage("cat",cat1Img);
     Tom.scale = 0.2;

     Jerry = createSprite(100,650,10,10);
     Jerry.addImage("mouse",mouse1Img);
     Jerry.scale = 0.2;
}

function draw() {

    background(BgImg);

    if(Tom.x == 270){
      Tom.addImage("cat",cat3Img);
      Tom.changeAnimation("cat",cat3Img);
      Tom.velocityX = 0;

      Jerry.addImage("mouse",mouse3Img);
      Jerry.changeAnimation("mouse",mouse3Img);
    }
     
    keyPressed();

    drawSprites();
}


function keyPressed(){

  
      if(keyDown("LEFT_ARROW")){
          Tom.velocityX = -2;
          Tom.addImage("cat",cat2Img);
          Tom.changeAnimation("cat",cat2Img);

          Jerry.addImage("mouse",mouse2Img);
          Jerry.changeAnimation("mouse",mouse2Img);
      }

}