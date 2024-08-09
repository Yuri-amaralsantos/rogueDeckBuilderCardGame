import { player } from "./player.js"
import {bots} from "./enemy.js"

class Card{
  
}

export let cddb=[
{t1:"strike", cost:1, damage:6
},
{t1:"block", cost:1, block: 5},
{t1:"heavy", t2:"strike", cost:2, damage: 8, vulnerable:2},
]



let act=[
{t1:"atk",damage:5},
{t1:"def",block:5},
{t1:"atk/def", damage:3, block:3},
{t1:"weak",weak:2},
]

export let botList=[
{name:"mob1", actions:[act[0], act[1], act[3]]},
{name:"mob2", actions:[act[0], act[1], act[2]]}
]

export let game={turn:"player"}
//let texto = ""

export function pass() {
  if (game.turn == "player") {
    game.turn="bot"
    player.vulnerable = -1
    player.weak = -1
    
    for (let i in bots) {
      bots[i].armor = 0
      playEffect(bots[i], player, bots[i].action)
      console.log(0)
      bots[i].vulnerable -= 1
      bots[i].weak -= 1
    }
    pass()
  } else {
    game.turn = "player"
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



