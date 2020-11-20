// create a wrapper div
const janez = document.createElement('div');
janez.classList.add('wrapper');
document.body.appendChild(janez);
// make an unordered list
const myList = document.createElement('ul');
const one = document.createElement('li');
one.textContent = 'one';
const two = document.createElement('li');
two.textContent = 'two';
const three = document.createElement('li');
three.textContent = 'three';
myList.insertAdjacentElement('afterbegin', one);
one.insertAdjacentElement('afterend', two);
two.insertAdjacentElement('afterend', three);
janez.insertAdjacentElement('afterbegin', myList);
// create an image
const image = document.createElement('img');
image.classList.add('cute');
image.src = 'https://picsum.photos/500';
image.width = 250;
image.alt = 'Cute Puppy';
janez.appendChild(image);
console.log(image);
// create a div with 2 paragraphs
const divWithString = `
    <div class="janezDiv">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;
myList.insertAdjacentHTML('beforebegin', divWithString);
const janezDiv = janez.querySelector('.janezDiv');
janezDiv.lastElementChild.classList.add('warning');
janezDiv.firstElementChild.remove();
// create a function
function generatePlayerCard(name = 'Janez', age = 28, height = '182 cm') {
  const dogyears = age * 7;
  const info = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${dogyears}. That would be a tall dog!</p>
            <button class="delete" onclick="removeCard(this)" type="button">Remove me</button>
        </div>
    `;
  return info;
}
// console.log(generatePlayerCard());
// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');

const firstCard = generatePlayerCard();
const secondCard = generatePlayerCard('Nives', 28, 182);
const thirdCard = generatePlayerCard('Mateja', 25, 175);
const fourthCard = generatePlayerCard('Nastja', 27, 173);
newDiv.insertAdjacentHTML('afterbegin', firstCard);
newDiv.insertAdjacentHTML('beforeend', secondCard);
newDiv.insertAdjacentHTML('beforeend', thirdCard);
newDiv.insertAdjacentHTML('beforeend', fourthCard);
janez.insertAdjacentElement('beforebegin', newDiv);
// lahko pa tudi tako kot Wes Bos
// newDiv.innerHTML = newDiv ???

// Wes bos je  removal Card z event listenerji
function removeCard(element) {
  console.log(this);
  // ali pa tako kot Wes Bos element.closest('.playerCard').remove();
  element.parentElement.remove();
}
console.log(newDiv);
