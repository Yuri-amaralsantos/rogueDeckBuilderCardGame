function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  shuffleArray(deck)
  draw(4)
}
start()

function play(x) {

  if (x.damage) {
    bots[p1.target].hp -= x.damage
    if (bots[p1.target].hp < 1) {
      bots.splice([p1.target], 1)
    }
  }
  else if (x.block) {
    p1.hp += x.block
  }
}

function botPlay() {

}

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
    turn = "bot"
    for (let i in bots) {
      p1.hp -= 5
    }
    pass()
  } else {
    turn = "player"
    p1.mana = 3
    for (let i in bots) {
      bots[i].choose()
    }
    let x = hand.length
    for (let i = 0; i < x; i++) {
      discard.push(hand[0])
      hand.splice(0, 1)
    }
    console.log(hand)
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
        play(hand[i])
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