function draw() {
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

      ctx.font = '14px Arial';
      ctx.fillStyle = 'black';

      
      ctx.fillText("player "+p1.hp, 100, 300)
      ctx.fillText("mob "+mob1.hp, 100, 100)

    }
