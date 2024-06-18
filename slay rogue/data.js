const canvas = document.getElementById("breakoutCanvas");
    canvas.width = 300
    canvas.height =500
    const ctx = canvas.getContext("2d");

let hand=["strike","strike","block"]
let handPos=[50, 110, 170]



turn="player"
let texto = ""
