const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

/* butts.addEventListener('click', function() {
  console.log('It got clicked');
}); */

function handleClick() {
  console.log('It got clicked');
}

// another example with arrow function
const hooray = () => console.log('HOORAY!');
// --

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

/* function buyItem() {
  console.log('Buying ITEM');
}

buyButtons.forEach(function(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
});
// another example with arrow function
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('YOU CLICKED IT');
  });
});
 */

function handleBuyButtonClick(event) {
  console.log('you"ve clicked a button');
  const button = event.target;
  console.log(button.textContent);
  // console.log('You are buying it!');
  // console.log(event.target);
  console.log(button);
  console.log(event.currentTarget);
  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log("you've clicked the window");
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function(e) {
  console.log(e.currentTarget);
  console.log(this);
});
