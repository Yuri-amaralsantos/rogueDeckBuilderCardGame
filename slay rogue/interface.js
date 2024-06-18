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
      
      ctx.beginPath();
      ctx.rect(230, 230, 60, 30);
      ctx.fillStyle = "orange"
      ctx.fill();
      ctx.closePath();
      
      //mobs
      ctx.beginPath();
      ctx.rect(100, 90, 50, 20 );
      ctx.fillStyle = "orange"
      ctx.fill();
      ctx.closePath();

      ctx.font = '14px Arial';
      ctx.fillStyle = 'black';

      
      
      ctx.fillText("player "+p1.hp, 100, 300)
      ctx.fillText("mob "+mob1.hp, 100, 100)


    }
