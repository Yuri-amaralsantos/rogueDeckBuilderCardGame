function draw() {
  //hand
      for (i in hand) {
        ctx.beginPath();
        ctx.rect(handPos[i], 400, 50, 70);
        ctx.fillStyle = "green"
        ctx.fill();
        ctx.closePath();

        ctx.font = '14px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(hand[i], handPos[i] + 10, 420)
      }
      
      //pass
      ctx.beginPath();
      ctx.rect(230, 230, 60, 30);
      ctx.fillStyle = "orange"
      ctx.fill();
      ctx.closePath();
      
      //mobs
      ctx.beginPath();
      ctx.rect(100, 90, 60, 30 );
      ctx.fillStyle = "orange"
      ctx.fill();
      ctx.closePath();

      ctx.font = '14px Arial';
      ctx.fillStyle = 'black';
      
      //button pass
      ctx.fillText("pass", 245, 250)

//ui turn
      ctx.fillText("turn "+turn, 30, 30)
      
      //hp player
      ctx.fillText("player "+p1.hp, 100, 300)
      
      //hp mobs
      ctx.fillText("mob "+mob1.hp, 100, 90)


    }
