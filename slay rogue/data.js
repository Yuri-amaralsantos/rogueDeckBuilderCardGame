const canvas = document.getElementById("breakoutCanvas");
    canvas.width = 300
    canvas.height =500
    const ctx = canvas.getContext("2d");


class Card{
  
}
let c1 ={title:"strike", cost:1, damage:5}
let c2 ={title:"block", cost:1, block: 5}

let deck = [{...c1},{...c1},{...c2},{...c2}, {...c1},{...c1},{...c2},{...c2}]
let hand =  []
let discard=[]
let handPos=[30, 90, 150, 210]



turn="player"
let texto = ""
