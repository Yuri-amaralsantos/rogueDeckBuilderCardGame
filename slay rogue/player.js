class Player{
  hp=30
  target=0
}

let p1 = new Player()

class  Bot{
  hp=10
}

let mob1 = new Bot()
let mob2 = new Bot()


let bots = [{...mob1}, {...mob1}, {...mob2}]
let botPos=[50, 120, 190]