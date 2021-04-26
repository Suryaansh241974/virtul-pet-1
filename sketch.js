//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogImage;
var happyDogImage;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
 
}

function setup() {
	createCanvas(500, 500);
  
  database=firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
  foodStock.set(20);


  dog = createSprite(250,350,10,60);
  dog.addImage(dogImage);
  dog.sacle=0.2;

 
}


function draw() {  
  backGround(0,225,0)
 if(foodS!== undefined){
  textSize(20);
  fill(225) ;
 text("Note:Press UP_ARROW keyto feed the drago Milk",50,50)
 text("food Remaning: "+foodS,150,150)
 }
 
 

  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDogImage);
  }
  

  if(keyWentUp(UP_ARROW)){
    dog.addImage(DogImage);
   }
   if(foodS===0){
     foodS=20;
   }
 
  drawSprites();
  //add styles here
  function writeStock(x){
   if(x<=0){
     x=0;
   }
   else{
     x=x-1;
   }
  database.ref("/").update({
Food:x
  })
 
  
  }
}

function readStock(data){
  food=data.val();
}





