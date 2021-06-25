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
  
    //  player1=createSprite(100,200,50,50);
    //  player1.addImage(p1);

    //  player2=createSprite(100,200,50,50);
    //  player2.addImage(p2);

    //  player3=createSprite(100,200,50,50);
    //  player3.addImage(p3);

    //  player4=createSprite(100,200,50,50);
    //  player4.addImage(p4);

    //  coins=createSprite(displayWidth/2,displayHeight/2);
     

    //  players=[player1,player2,player3,player4];
    }
  
    play(){
      form.hide();
      
      // Player.getPlayerInfo();
      // Player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        background(b1);
        //image(b1, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
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
          players[index-1].x = x;
          players[index-1].y = y;
  
          if (index === player.index){
            stroke(10);
            fill("green");
            ellipse(x,y,60,60)
            players[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = players[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
       function keyPressed(){

 

  if(keyCode === 32 ){
    coins=createSprite(1100,350);
    // player.distance +=50
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1: coins.addImage(c1);
      break;
      case 2: coins.addImage(c2);
      break;
      case 3: coins.addImage(c3);
      break;
      case 4: coins.addImage(c4);
      break;
      case 5: coins.addImage(c5);
      break;
      case 6: coins.addImage(c6);
      break;

       }
     }

     coins.scale = 2;

     
}
  
      
     
      drawSprites();
    }
  
    
  }
  