/* const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
console.log(imgs);
const heading = document.querySelector('h2');

console.dir(heading.textContent);
console.dir(heading.innerText); */
/* heading.textContent = 'wes is cool';
console.dir(heading.textContent);
console.dir(heading.innerText); */

/* console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent); */
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
/* pizzaList.insertAdjacentText('afterbegin', '🍕🍕');
pizzaList.insertAdjacentText('beforeend', '🍕🍕'); */

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
