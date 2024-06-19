const canvas = document.getElementById("breakoutCanvas");
    canvas.width = 300
    canvas.height =500
    const ctx = canvas.getContext("2d");


class Card{
  
}
let c1 ={title:"strike"}
let c2 ={title:"block"}

let deck = [{...c1},{...c1},{...c2},{...c2}]
let hand =  [{...c1},{...c1},{...c2},{...c2}]
let discard=[]
let handPos=[30, 90, 150, 210]



turn="player"
let texto = ""
