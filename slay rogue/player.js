import { cddb } from "./data.js"

class Player {
  mana = 3
  hp = 30
  armor = 0
  target = 0
  vulnerable = 0
  weak = 0
  hand = [

  ]

  deck = [
    { ...cddb[0] },
    { ...cddb[0] },
    { ...cddb[0] },
    { ...cddb[1] },
    { ...cddb[2] },
  ]
  discard = []

  draw(x) {
    for (let i = 0; i < x; i++) {
      if (this.deck.length == 0) {
        this.deck = this.discard
      }
      this.hand.push(this.deck[0])
      .deck.splice(0, 1)
    }
  }

  shuffleArray() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; 
    }
    return this.deck
  }


}

export let player = new Player()