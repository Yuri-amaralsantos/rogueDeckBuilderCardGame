import { player } from "./player.js"
import { bots } from "./enemy.js"
import {playEffect} from "./effects.js"

class GameControl {
  turn = "player"

  pass() {
    if (this.turn == "player") {
      this.turn = "bot"
      if(player.weak>0){
      player.vulnerable = -1
      }
      if(player.vulnerable>0){
      player.weak = -1
      }

      for (let i in bots) {
        bots[i].armor = 0
        playEffect(bots[i], player, bots[i].action)
        if(bots[i].vulnerable>0){
        bots[i].vulnerable -= 1
        }
        if(bots[i].weak>0){
        bots[i].weak -= 1
        }
      }
      this.pass()
    } else {
      this.turn = "player"
      player.armor = 0
      player.mana = 3
      for (let i in bots) {
        bots[i].choose()
      }

      let x = player.hand.length
      for (let i = 0; i < x; i++) {
        player.discard.push(player.hand[0])
        player.hand.splice(0, 1)
      }

      player.draw(4)

    }
  }
}
export let game = new GameControl()