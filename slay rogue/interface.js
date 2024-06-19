function updateUi() {
  //hand
  for (let i in hand) {
    ctx.beginPath();
    ctx.rect(handPos[i], 400, 50, 70);
    ctx.fillStyle = "green"
    ctx.fill();
    ctx.closePath();

    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(hand[i].title, handPos[i] + 10, 420)
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
  ctx.rect(230, 230, 60, 30);
  ctx.fillStyle = "orange"
  ctx.fill();
  ctx.closePath();



  ctx.font = '14px Arial';
  ctx.fillStyle = 'black';

  //button pass
  ctx.fillText("pass", 245, 250)

  //ui turn
  ctx.fillText("turn " + turn, 30, 30)

  //hp player
  ctx.fillText("player " + p1.hp, 100, 300)



}