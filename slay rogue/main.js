function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();

  requestAnimationFrame(update);
}


update();

function play(x){
  if(x=="strike"){
    mob1.hp-=5
  }
  else if(x=="block"){
    p1.hp+=5
  }


}


canvas.addEventListener('touchstart', function(e) {
  const touchX = e.touches[0].clientX - canvas.offsetLeft;
  const touchY = e.touches[0].clientY - canvas.offsetTop;
  for (i in hand) {
    if (touchX >= handPos[i] && touchX <= handPos[i] + 50 &&
      touchY >= 400 && touchY <= 400 + 70) {
      play(hand[i])
      hand.splice(i, 1)
      break
    }
  }
});