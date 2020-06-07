 var runningrect,fixedrect;
 var ob1,ob2;
 function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(100, 200, 50, 50);
  fixedrect.shapeColor="green";
  runningrect= createSprite(700,200,100,50);
  runningrect.shapeColor="red";
  fixedrect.velocityX=5;
  runningrect.velocityX=-5;
  ob1=createSprite(100,100,90,50);
  ob1.shapeColor="gold";
  ob2=createSprite(200,100,90,50);
  ob2.shapeColor="silver"; 
}

function draw() {
  background(0); 
  bounceoff(runningrect,fixedrect);
  ob2.x=mouseX;
  ob2.y=mouseY;
  if(isTouching(ob1,ob2)){
    ob1.shapeColor="silver";
    ob2.shapeColor="gold"; 
  }else{
    ob2.shapeColor="silver"; 
    ob1.shapeColor="gold";
  }

  drawSprites();
}














