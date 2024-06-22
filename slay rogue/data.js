const canvas = document.getElementById("canvas");
    canvas.width = 370
    canvas.height =600
    const ctx = canvas.getContext("2d");


class Card{
  
}
let c1 ={t1:"strike", cost:1, damage:6
}
let c2 ={t1:"block", cost:1, block: 5}
let c3 ={t1:"heavy", t2:"strike", cost:2, damage: 8, vulnerable:2}

let a1={t1:"atk",damage:5}
let a2={t1:"def",block:5}
let a3={t1:"atk/def", damage:3, block:3}
let a4={t1:"weak",weak:2}

let deck = [{...c1},{...c1},{...c1},{...c1},{...c1},{...c2},{...c2},{...c2},{...c2},{...c3}]
let hand =  []
let discard=[]
let handPos=[10, 68, 126, 184, 242, 300]



turn="player"
let texto = ""

function rng(min, max) {
  let value = Math.floor(Math.random() * (max +1)) + min
  return value
}
