class Player{
  mana= 3
  hp=30
  target=0
}

let p1 = new Player()

class  Bot{
  hp=10
  actions=[]
  actionChoosed="attack"
}

let mob1 = new Bot()
let mob2 = new Bot()


let bots = [{...mob1}, {...mob1}, {...mob2}]
let botPos=[50, 160, 270]