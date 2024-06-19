function updateUi() {
  //hand
  for (let i in hand) {
    ctx.fillStyle = "green"
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.fillRect(handPos[i], 490, 50, 50)
    ctx.strokeRect(handPos[i], 490, 50, 50);

    ctx.font = '14px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(hand[i].title, handPos[i] + 10, 510)
  }

  for (let i in bots) {
    ctx.beginPath();
    ctx.rect(botPos[i], 90, 60, 30);
    if (p1.target == i) {
      ctx.fillStyle = "red"
    } else {
      ctx.fillStyle = "yellow"
    }
    ctx.fill();
    ctx.closePath();

    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("mob", botPos[i] + 10, 90)
    ctx.fillText("hp:" + bots[i].hp, botPos[i] + 10, 130)
    ctx.fillText(bots[i].actionChoosed, botPos[i] + 10, 150)
  }

  //pass
  ctx.beginPath();
  ctx.rect(310, 230, 60, 30);
  ctx.fillStyle = "orange"
  ctx.fill();
  ctx.closePath();



  ctx.font = '14px Arial';
  ctx.fillStyle = 'black';

  //button pass
  ctx.fillText("pass", 325, 250)

  

  //hp player
  ctx.fillText("player hp:" + p1.hp, 30, 450)
  ctx.fillText("mana: " + p1.mana, 30, 470)



}