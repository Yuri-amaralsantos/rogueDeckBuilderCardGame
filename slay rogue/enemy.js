import {botList} from "./data.js"

class Bot {
  constructor(obj) {
    this.name = obj.name
    this.actionList = obj.actions
  }
  hp = 20
  armor = 0
  vulnerable = 0
  weak = 0

  action = ""
  
  choose() {
    let r = rng(0, this.actionList.length - 1)
    this.action = this.actionList[r]
    console.log(this.action)
  }
}


function rng(min, max) {
  let value = Math.floor(Math.random() * (max + 1)) + min
  return value
}


export let bots = [
new Bot(botList[0]),
new Bot(botList[0]),
new Bot(botList[1])
]

