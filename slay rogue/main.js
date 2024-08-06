import {updateUi} from "./interface.js"
function update() {
  updateUi();

  requestAnimationFrame(update);
}


update()

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


function pass() {
  if (turn == "player") {
    p1.vulnerable = -1
    p1.weak = -1
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
    p1.armor = 0
    p1.mana = 3
    
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


canvas.addEventListener('touchstart', function(e) {
  const touchX = e.touches[0].clientX - canvas.offsetLeft;
  const touchY = e.touches[0].clientY - canvas.offsetTop;
  for (let i in hand) {
    if (touchX >= handPos[i] && touchX <= handPos[i] + 58 &&
      touchY >= 490 && touchY <= 490 + 80) {
      if (p1.mana >= hand[i].cost) {
        playEffect(p1, bots[p1.target], hand[i])
        p1.mana -= hand[i].cost
        discard.push(hand[i])
        hand.splice(i, 1)
      }
      break

    }
    for (let i in bots) {
      if (touchX >= botPos[i] && touchX <= botPos[i] + 60 &&
        touchY >= 90 && touchY <= 90 + 30) {
        p1.target = i
        break
      }
    }
  }
  if (touchX >= 310 && touchX <= 310 + 60 &&
    touchY >= 230 && touchY <= 230 + 30) {
    pass()
  }

});
*/