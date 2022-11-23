class Game {
  constructor() {
    this.leaderBoard=createElement("h2")
    this.l1=createElement("h2")
    this.l2=createElement("h2")
    this.resetButton = createButton("");
  }
getState(){
  database.ref("gameState").on("value",function(data){
  gameState=data.val()
  })
}
update(state){
  database.ref("/").update({
  gameState:state
  })
}
  start() {
 player=new Player()
 playerCount=player.getCount()



 form = new Form();
    form.display();
    
    c1=createSprite(width/3-100,height-10)
    c1.addAnimation("cheetah",cheetah1)
    l1=createSprite(width/3-100,height-10)
    l1.addAnimation("lion",lion)
   
    animals=[c1,l1]
    c1.scale=2
    l1.scale=2
    obstacles=new Group()
    basketball=new Group()
    log=new Group()
    cashg=new Group()
    var obstaclesPositions = [
      { x: width-800, y: height-200, image: obstacle2 },
      { x: width -600, y: height - 100, image: obstacle1 },
      { x: width / 2 + 250, y: height - 1800, image: obstacle1 },
      { x: width / 2 - 180, y: height - 2300, image: obstacle2},
      { x: width / 2, y: height - 2800, image: obstacle2 },
      { x: width / 2 - 180, y: height - 3300, image: obstacle1},
      { x: width / 2 + 180, y: height - 3300, image: obstacle2 },
      { x: width / 2 + 250, y: height - 3800, image: obstacle2 },
      { x: width / 2 - 150, y: height - 4300, image: obstacle1},
      { x: width / 2 + 250, y: height - 4800, image: obstacle2},
      { x: width / 2, y: height - 5300, image: obstacle1},
      { x: width / 2 - 180, y: height - 5500, image: obstacle2}
    ];
    this.addSprites(basketball,5,obstacle1,0.5)
this.addSprites(obstacles,obstaclesPositions.length,obstacle2,0.3,obstaclesPositions)
this.addSprites(log,7,obstacle4,0.3)
this.addSprites(cashg,9,obstacle3,0.5)
  }
  addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;

      //C41 //SA
      if (positions.length > 0) {
        x = positions[i].x;
        y = positions[i].y;
        spriteImage = positions[i].image;
      } else {
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
      }
      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
  }
  handleElemnts(){
    form.hide()
    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
  }
  play(){
    this.handleElemnts()
    this.handleResetButton();
    Player.getPlayerinfo()
    player.getPlayersATEnd()
    if(allPlayers!==undefined){

      image (track1,width/3-200,0, width*6,height)
    var index=0
    for( var plr in allPlayers) {
      index=index+1 

      // c1.position.x=100
      // l1.position.x=100
      var x = width/3-allPlayers[plr].positionX
      var y = height-100
    animals[index-1].position.x=x
      animals[index-1].position.y=y
      if(index===player.index){
        this.handlePowerCoins(index)
        this.handleObstacleCollision(index)
        camera.position.x = animals[index - 1].position.x;
      }
    }
    this.handlePlayer()

    const finshLine = width * 6 - 100;

      if (player.positionX > finshLine) {

      //   image(track1,width*5,0,- width*6,height)
      
        gameState = 2;
        player.rank += 1;
        Player.updatePlayersAtEnd(player.rank);
        player.update();
        // this.showRank();
        this.gameOver();
      }
      drawSprites()
    }
   
  
  }

  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
        
      });
      window.location.reload();
    });
  }


  handlePlayer(){
  if(keyIsDown(RIGHT_ARROW)){
player.positionX -=10
player.update()
  }
  }
  handlePowerCoins(index) {
    animals[index - 1].overlap(cashg, function(collector, collected) {
      player.score += 21;
      player.update();
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
    });
  }

  handleObstacleCollision(index) {
    if (animals[index - 1].collide(obstacles)) {
  //     if (this.leftKeyActive) {
  //       player.positionX += 100;
  //     } else {
  //       player.positionX -= 100;
  //     }

  //     //Reducing Player Life
  //     if (player.life > 0) {
  //       player.life -= 185 / 4;
  //     }

      player.update();
    }
  }
  showRank() {
    swal({
      title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
      text: "You reached the finish line successfully",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }
  gameOver() {
    swal({
      title: `Game Over`,
      text: "Oops you lost the race....!!!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }

}
