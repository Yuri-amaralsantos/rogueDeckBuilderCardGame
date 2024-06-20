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
  actions = ["atk","def", "weak"]
  actionChoosed=""
  choose = function(){
    let r  = rng(0,this.actions.length-1)
    this.actionChoosed = this.actions[r]
  }
}

let mob1 = new Bot("mob1")
let mob2 = new Bot("mob2")



let bots = [{...mob1}, {...mob1}, {...mob2}]

bots[0].choose()
let botPos=[50, 160, 270]