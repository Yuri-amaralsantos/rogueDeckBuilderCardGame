const canvas = document.getElementById("breakoutCanvas");
    canvas.width = 370
    canvas.height =600
    const ctx = canvas.getContext("2d");


class Card{
  
}
let c1 ={t1:"strike", cost:1, damage:5}
let c2 ={t1:"block", cost:1, block: 5}
let c3 ={t1:"heavy", t2:"strike", cost:2, damage: 10}

let deck = [{...c1},{...c1},{...c1},{...c1},{...c1},{...c2},{...c2},{...c2},{...c2},{...c3}]
let hand =  []
let discard=[]
let handPos=[10, 68, 126, 184, 242, 300]



turn="player"
let texto = ""
