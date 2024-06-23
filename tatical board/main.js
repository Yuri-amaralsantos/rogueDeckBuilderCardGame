const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let grid=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

function updateUi() {
for(let i in grid){
for(let j in grid[i]){
ctx.fillStyle = "green"
ctx.strokeStyle = '#000';
ctx.lineWidth = 2;
ctx.fillRect(50*i, 50*j, 50, 50)
ctx.strokeRect(50*i, 50*j, 50, 50)
}
}
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateUi();

  requestAnimationFrame(update);
}


update()

canvas.addEventListener('touchstart', function(e) {
  const touchX = e.touches[0].clientX - canvas.offsetLeft;
  const touchY = e.touches[0].clientY - canvas.offsetTop;
  console.log(touchX)

});