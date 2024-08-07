import {player} from "./player.js"
import {bots} from "./enemy.js"
import {pass} from "./data.js"


export function controle (e) {
  const touchX = e.touches[0].clientX - canvas.offsetLeft;
  const touchY = e.touches[0].clientY - canvas.offsetTop;
  for (let i in player.hand) {
    if (touchX >= 10+(58*i) && touchX <= (10+(58*i))+58 &&
      touchY >= 490 && touchY <= 490 + 80) {
     console.log(i)
    
      if (player.mana >= player.hand[i].cost) {
        //playEffect(p1, bots[p1.target], hand[i])
        player.mana -= player.hand[i].cost
        //discard.push(hand[i])
        player.hand.splice(i, 1)
      }
      break
    }
    for (let i in bots) {
      if (touchX >= 50 + (110 * i) && touchX <= 50 + (110 * i) + 110 &&
        touchY >= 90 && touchY <= 90 + 30) {
        player.target = i
        break
      }
    }

  }
  if (touchX >= 310 && touchX <= 310 + 60 &&
    touchY >= 230 && touchY <= 230 + 30) {
    pass()
  }

}