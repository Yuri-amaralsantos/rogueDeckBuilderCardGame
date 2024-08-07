import {updateUi} from "./interface.js"
import {controle} from "./control.js"


function update() {
  updateUi();

  requestAnimationFrame(update);
}


update()

class Game{
  
}

/*
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
*/

/*
function start() {
  shuffleArray(deck)
  draw(4)
  for (let i in bots) {
    bots[i].choose()
  }
}
start()




function draw(x) {

  for (let i = 0; i < x; i++) {

    if (deck.length == 0) {
      deck = discard
    }

    hand.push(deck[0])
    deck.splice(0, 1)
  }

}

*/
function pass() {
  if (turn == "player") {
    player.vulnerable = -1
    player.weak = -1
    turn = "bot"
    for (let i in bots) {
      bots[i].armor = 0
      playEffect(bots[i], p1, bots[i].action)
      bots[i].vulnerable -= 1
      bots[i].weak -= 1
    }
    pass()
  } else {
    turn = "player"
    player.armor = 0
    player.mana = 3
    
    for (let i in bots) {
      bots[i].choose()
    }
    let x = hand.length
    for (let i = 0; i < x; i++) {
      discard.push(hand[0])
      hand.splice(0, 1)
    }

    draw(4)
  }
}


canvas.addEventListener('touchstart', controle);
