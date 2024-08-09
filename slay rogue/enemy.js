import {act} from "./data.js"

class Bot {
  constructor(name, acts) {
    this.name = name
    this.actionList = acts
  }
  hp = 20
  armor = 0
  vulnerable = 0
  weak = 0

  action = ""
  
  choose() {
    let r = rng(0, this.actionList.length - 1)
    this.action = this.actionList[r]
  }
}

function rng(min, max) {
  let value = Math.floor(Math.random() * (max + 1)) + min
  return value
}

let mob1 = new Bot("mob1", [act[0], act[1], act[3]])
let mob2 = new Bot("mob2", [act[0], act[1], act[2]])


export let bots = [{ ...mob1 }, { ...mob1 }, { ...mob2 }]

bots[0].choose()