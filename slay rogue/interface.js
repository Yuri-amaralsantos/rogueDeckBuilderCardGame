const canvas = document.getElementById("canvas");
canvas.width = 370
canvas.height = 600
const ctx = canvas.getContext("2d");

export function updateUi() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /*
  //hand
  for (let i in hand) {
    ctx.fillStyle = "green"
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.fillRect(handPos[i], 490, 58, 80)
    ctx.strokeRect(handPos[i], 490, 58, 80);

    ctx.font = '11px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(hand[i].cost, handPos[i] + 10, 510)
    ctx.fillText(hand[i].t1, handPos[i] + 10, 530)
    if(hand[i].t2){
       ctx.fillText(hand[i].t2, handPos[i] + 10, 550)
    }
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
    ctx.fillText(bots[i].name, botPos[i] + 10, 90)
    ctx.fillText("hp:" + bots[i].hp +"+"+bots[i].armor, botPos[i] + 10, 130)
    ctx.fillText(bots[i].action.t1, botPos[i] + 10, 150)
  }
*/
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

  
/*
  //hp player
  ctx.fillText("player hp:" + p1.hp+"+"+p1.armor, 30, 450)
  ctx.fillText("mana: " + p1.mana, 30, 470)
*/


}