// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
// Setup our canvas for drawing
// Make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;

// Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// console.log(x, y);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
  // Increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // console.log(key);
  // Start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // Move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  // Create random x and y starting points on the canvas again after clearing it
  x = Math.floor(Math.random() * width);
  y = Math.floor(Math.random() * height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
