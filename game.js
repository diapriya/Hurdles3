class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      player1 = createSprite(150,350);
      //player1.addImage("player1",player1_img);
      player2 = createSprite(550,350);
      //player2.addImage("player2",player2_img);
      player3 = createSprite(950,350);
      //player3.addImage("player3",player3_img);
      player4 = createSprite(1450,350);
      //player4.addImage("player",player4_img);
      players = [player1,player2,player3,player4];
    }

 
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //background(rgb(198,135,103));
        //image(track, 5,-displayHeight*1,displayWidth, displayHeight*2);
        
        
        //index of the array
        var index = 2;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
        //  hurdle[index-1].x = x;
          //hurdle[index-1].y = y;
  
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            players[index - 1].shapeColor = "red";
           // camera.position.x = displayWidth/2;
            //////amera.position.y = cars[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if (keyCode === UP_ARROW) {
        player1.body.position.y = player1.body.position.y - 10;
       
      }
  
      if(player.distance > 3860){
        gameState = 2;
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }