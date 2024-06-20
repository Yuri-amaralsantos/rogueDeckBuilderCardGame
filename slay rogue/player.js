class Player{
  mana= 3
  hp=30
  target=0
}

let p1 = new Player()

class  Bot{
  constructor(name){
  this.name=name
  
  }
  hp = 10
  actions = [0,1,2]
  actionChoosed="attack"
  
}

let mob1 = new Bot("mob1")
let mob2 = new Bot("mob2")

test= rng(0,mob1.actions.length-1)
console.log(test)

let bots = [{...mob1}, {...mob1}, {...mob2}]
let botPos=[50, 160, 270]