var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var c1;
var cheetah1;
var allPlayers
var gameState
var animals
var l1
var track
var obstacles,cashg,basketball,log,chair
function preload() {
  backgroundImage = loadImage("./assets/house 1.jpeg");
  cheetah1 = loadAnimation("../assets/cheetah1.png","../assets/cheetah2.png","../assets/cheetah3.png","../assets/cheetah4.png","../assets/cheetah1.png"
  ,"../assets/cheetah5.png","../assets/cheetah6.png", "../assets/cheetah7.png");
  track = loadImage("../assets/house 2.jpeg");
  lion= loadAnimation("./assets/lion1.png","./assets/lion2.png","./assets/lion3.png","./assets/lion4.png","./assets/lion5.png","./assets/lion5.png")
   track1=loadImage("./assets/house 3.jpeg")
   obstacle1= loadImage("./assets/basketball.jpeg")
   obstacle3= loadImage("./assets/cash .jpeg")
   obstacle2= loadImage("./assets/chair.jpeg")
   obstacle4= loadImage("./assets/log.png")
}
  


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount===2
 ){game.update(1)
  
}
if(gameState===1){
  game.play()
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
