import {updateUi} from "./interface.js"
import {controle} from "./control.js"
import {player} from "./player.js"
import {bots} from "./enemy.js"

function update() {
  updateUi();

  requestAnimationFrame(update);
}


update()






function start() {
  player.shuffleArray(player)
  player.draw(4)
  for (let i in bots) {
    //bots[i].choose()
    
  }
}
start()










canvas.addEventListener('touchstart', controle);
