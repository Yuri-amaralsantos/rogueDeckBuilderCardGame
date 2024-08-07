exportclass Bot {
  constructor(name, acts) {
    this.name = name
    this.actionList = acts
  }
  hp = 20
  armor = 0
  vulnerable = 0
  weak = 0

  action = ""
  choose = function() {
    let r = rng(0, this.actionList.length - 1)
    this.action = this.actionList[r]
  }
}

let mob1 = new Bot("mob1", [a1, a2, a4])
let mob2 = new Bot("mob2", [a1, a2, a3])



export let bots = [{ ...mob1 }, { ...mob1 }, { ...mob2 }]

bots[0].choose()
let botPos = [50, 160, 270]