class Player{
  mana= 3
  hp=30
  armor=0
  target=0
}

let p1 = new Player()

class  Bot{
  constructor(name){
  this.name=name
  
  }
  hp = 10
  armor=0
  actionList = [{...a1},{...a2}, {...a3}]
  action=""
  choose = function(){
    let r  = rng(0,this.actionList.length-1)
    this.action = this.actionList[r]
  }
}

let mob1 = new Bot("mob1")
let mob2 = new Bot("mob2")



let bots = [{...mob1}, {...mob1}, {...mob2}]

bots[0].choose()
let botPos=[50, 160, 270]