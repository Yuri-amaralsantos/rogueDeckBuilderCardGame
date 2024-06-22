function playEffect(cast, tg, x) {
  if (x.damage) {
    let dmg
    if (tg.armor > 0) {
      let temp = x.damage
      temp -= tg.armor
      tg.armor -= x.damage
      if (temp < 0) {
        temp = 0
      }
      if (tg.armor < 0) {
        tg.armor = 0
      }
      dmg = temp
    }
    else {
      dmg = x.damage
    }
    tg.hp-=Math.round(dmg*tg.vulnerable*cast.weak
    if (turn == "player") {
      if (bots[p1.target].hp < 1) {
        bots.splice(p1.target, 1)
      }
    }

  }
  if (x.block) {
    cast.armor += x.block
  }
  if(x.vulnerable){
    tg.vulnerable=1.5
  }
  if(x.weak){
    tg.weak=0.25
  }
}