var dog, happyDog, database, foodS, foodStock;
var ds

function preload()
{
  dog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  ds = createSprite(250, 250);
  ds.addImage("sitting", dog);
  ds.addImage("eating", happyDog);
  ds.scale = 0.4;

  database = firebase.database();

  foodStock = database.ref('Food')
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

if (keyIsDown(UP_ARROW)){
  x=x-1;
}

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

function writeStock(x){
  if (x<=0){
    x = 0;
  } else{
    x = x-1;
  }

  database.ref('/').update({
    Food: x
  })
}