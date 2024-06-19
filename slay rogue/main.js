function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateUi();

  requestAnimationFrame(update);
}


update();

function play(x){
  
  if(x.title=="strike"){
    bots[p1.target].hp-=5
   if(bots[p1.target].hp<1){
      bots.splice([p1.target],1)
    }
  }
  else if(x.title=="block"){
    p1.hp+=5
  }
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


function pass(){
  if(turn=="player"){
    turn="bot"
    pass()
  } else{
    turn="player"
    for(i in hand){
      discard.push(hand[i])
      hand.splice(i, 1)
    }
    draw(4)
  }
}


canvas.addEventListener('touchstart', function(e) {
  const touchX = e.touches[0].clientX - canvas.offsetLeft;
  const touchY = e.touches[0].clientY - canvas.offsetTop;
  if(turn=="player"){
  for (i in hand) {
    if (touchX >= handPos[i] && touchX <= handPos[i] + 50 &&
      touchY >= 400 && touchY <= 400 + 70) {
      play(hand[i])
      discard.push(hand[i])
      hand.splice(i, 1)
      break
    }
  }
  for (i in bots) {
    if (touchX >= botPos[i] && touchX <= botPos[i] + 60 &&
      touchY >= 90 && touchY <= 90 + 30) {
      p1.target = i
      break
    }
  }
  }
  if (touchX >= 230 && touchX <= 240 + 60 &&
    touchY >= 230 && touchY <= 230 + 30) {
    pass()
  }
  else if (touchX >= 100 && touchX <= 100 + 60 &&
      touchY >= 90 && touchY <= 90 + 30) {
      p1.targrt
  }
});
