const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.width = 600;

// // fillRect()
// ctx.fillStyle = 'red';
// ctx.fillRect(300, 300, 200, 200);

// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 200, 100, 100);

// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);

// // clearRect()
// ctx.clearRect(300, 300, 200, 200);

// // fillText()
// ctx.font = '30px Arial';
// ctx.fillStyle = 'salmon';
// ctx.fillText('Hello world', 400, 50);

// // strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'green';
// ctx.strokeText('Hello World', 400, 80);

// Paths
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 100);
// ctx.lineTo(50, 50);
// // ctx.closePath(); to close path, same action as above
// ctx.fillStyle = 'coral';
// ctx.fill();
// // ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

// // Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// Arc
// ctx.beginPath();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // draw head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// ctx.moveTo(centerX + 100, centerY);

// // draw mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// // move to left eye
// ctx.moveTo(centerX - 60, centerY - 80);

// // draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// // move to right eye
// ctx.moveTo(centerX + 100, centerY - 80);
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// ctx.stroke();

// Animation 1

// const circle = {
//   x: 200,
//   y: 200,
//   size: 30,
//   dx: 5,
//   dy: 4
// };

// function drawCircle() {
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   ctx.fillStyle = 'blue';
//   ctx.fill();
// }

// function update() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle();

//   circle.x += circle.dx;
//   circle.y += circle.dy;

//   if (circle.x + circle.size >= canvas.width || circle.x - circle.size <= 0) {
//     circle.dx = -circle.dx;
//   }

//   if (circle.y + circle.size >= canvas.height || circle.y - circle.size <= 0) {
//     circle.dy *= -1;
//   }

//   requestAnimationFrame(update);
// }

// update();

// animation 2 - character

const image = document.getElementById('source');

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
};

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function detectWalls() {
  if (player.x < 0) {
    player.x = 0;
  }

  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }
}

function update() {
  clear();
  drawPlayer();

  newPos();

  requestAnimationFrame(update);
}

update();

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveLeft();
  }
}

function keyUp(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    player.dx = 0;
    player.dy = 0;
  }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
