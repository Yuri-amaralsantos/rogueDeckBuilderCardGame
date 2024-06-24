const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let grid = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

let p1={x:0, y:0}

function updateUi() {
  for (let i in grid) {
    for (let j in grid[i]) {
      
      if(
        i==p1.x-1 && j== p1.y ||
        i==p1.x+1 && j== p1.y ||
        i==p1.x && j== p1.y+1 ||
        i==p1.x && j== p1.y-1 
      ){
        ctx.fillStyle = "green"
      } else{
        ctx.fillStyle = "red"
      }
      
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.fillRect(50 * i, 50 * j, 50, 50)
      ctx.strokeRect(50 * i, 50 * j, 50, 50)
    }
  }
  ctx.fillStyle = "black"
  ctx.fillRect((p1.x*50)+15, (p1.y*50)+15, 20, 20)
  
  
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateUi();

  requestAnimationFrame(update);
}


update()

function move(x, y){
  
}

canvas.addEventListener('touchstart', function(e) {
  const touchX = e.touches[0].clientX - canvas.offsetLeft;
  const touchY = e.touches[0].clientY - canvas.offsetTop;
  if(touchX<=200 && touchY<=200){
  let x = Math.trunc(touchX / 50)
  let y = Math.trunc(touchY / 50)
  move(x, y)
/*
grid[p1.x][p1.y]=0
p1.x=x
p1.y=y
grid[p1.x][p1.y]=1
*/

}
});