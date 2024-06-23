const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let grid=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

function updateUi() {

  ctx.font = '14px Arial';
  ctx.fillStyle = 'black';

  //button pass
  ctx.fillText("pass", 50, 50)
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateUi();

  requestAnimationFrame(update);
}


update()