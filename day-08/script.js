const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "blue";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
let hue = 0;
let widthDelta = 1;
let lx,
  ly = [0, 0];

let isDrawing = false;

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lx, ly);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lx, ly] = [e.offsetX, e.offsetY];

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue = ++hue % 360;

  ctx.lineWidth += widthDelta;
  if (ctx.lineWidth < 20 || ctx.lineWidth > 100) {
    widthDelta = -widthDelta;
  }
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // ctx.moveTo(e.offsetX, e.offsetY)
  ctx.closePath(); //close if previously open
  [lx, ly] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
