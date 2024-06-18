const canvas = document.getElementById("breakoutCanvas");
    canvas.width = 300
    canvas.height =500
    const ctx = canvas.getContext("2d");

let deck =["strike","strike","block", "block"]
let hand=["strike","strike","block", "block"]
let handPos=[30, 90, 150, 210]



turn="player"
let texto = ""
