function playEffect(cast, tg, x) {
  if (x.damage) {
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
      tg.hp -= temp
    }
    else {
      tg.hp -= x.damage
    }
    if (turn == "player") {
      if (bots[p1.target].hp < 1) {
        bots.splice(p1.target, 1)
      }
    }

  }
  if (x.block) {
    cast.armor += x.block
  }
}