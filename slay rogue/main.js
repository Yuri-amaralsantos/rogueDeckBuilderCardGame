import {updateUi} from "./interface.js"
import {controle} from "./control.js"
import {player} from "./player.js"


function update() {
  updateUi();

  requestAnimationFrame(update);
}


update()






function start() {
  player.shuffleArray(player)
  player.draw(4)
  /*
  for (let i in bots) {
    bots[i].choose()
  }
  */
}
start()








function rng(min, max) {
  let value = Math.floor(Math.random() * (max +1)) + min
  return value
}

canvas.addEventListener('touchstart', controle);
