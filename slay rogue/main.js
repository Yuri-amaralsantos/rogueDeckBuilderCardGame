import {updateUi} from "./interface.js"
import {controle} from "./control.js"
import {player} from "./player.js"


function update() {
  updateUi();

  requestAnimationFrame(update);
}


update()




function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}


function start() {
  shuffleArray(player.deck)
  draw(4)
  /*
  for (let i in bots) {
    bots[i].choose()
  }
  */
}
start()




function draw(x) {

  for (let i = 0; i < x; i++) {

    if (player.deck.length == 0) {
      player.deck = player.discard
    }

    player.hand.push(player.deck[0])
    player.deck.splice(0, 1)
  }

}



function rng(min, max) {
  let value = Math.floor(Math.random() * (max +1)) + min
  return value
}

canvas.addEventListener('touchstart', controle);
