import { player } from "./player.js"
import { bots } from "./enemy.js"
import { game } from "./game.js"

const canvas = document.getElementById("canvas");
canvas.width = 370
canvas.height = 600
const ctx = canvas.getContext("2d");


export function updateUi() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  //hand
  for (let i in player.hand) {
    ctx.fillStyle = "green"
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.fillRect(10 + (58 * i), 490, 58, 80)
    ctx.strokeRect(10 + (58 * i), 490, 58, 80);

    ctx.font = '10px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(player.hand[i].cost, 20 + (58 * i), 510)
    ctx.fillText(player.hand[i].t1, 20 + (58 * i), 530)
    if (player.hand[i].t2) {
      ctx.fillText(player.hand[i].t2, 20 + (58 * i), 550)
    }

  }
  for (let i in bots) {
    if (player.target == i) {
      ctx.fillStyle = "red"
    } else {
      ctx.fillStyle = "yellow"
    }
    ctx.fillRect(50 + (110 * i), 90, 60, 30)


    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(bots[i].name, 50 + (110 * i), 90)
    ctx.fillText("hp:" + bots[i].hp + "+" + bots[i].armor, 50 + (110 * i), 130)
    ctx.fillText(bots[i].action.t1, 50 + (110 * i), 150)
  }
  
  //pass
  ctx.fillStyle = "orange"
  ctx.fillRect(310, 230, 60, 30);
  ctx.font = '14px Arial';
  ctx.fillStyle = 'black'
  ctx.fillText("pass", 325, 250)

  ctx.fillText("turn:" + game.turn, 30, 400)

  //hp player
  ctx.fillText("player hp:" + player.hp + "+" + player.armor, 30, 450)
  ctx.fillText("mana: " + player.mana, 30, 470)



}