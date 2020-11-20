console.log('it works');
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// we need something to the top of the element
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');
const myFirst = document.createElement('li');
myFirst.textContent = 'One';
const mySecond = document.createElement('li');
mySecond.textContent = 'Two';
const myThird = document.createElement('li');
myThird.textContent = 'Three';
const myFourth = document.createElement('li');
myFourth.textContent = 'Four';
const myFifth = document.createElement('li');
myFifth.textContent = 'Five';

myList.insertAdjacentElement('afterbegin', myFirst);
myFirst.insertAdjacentElement('afterend', mySecond);
mySecond.insertAdjacentElement('afterend', myThird);
myThird.insertAdjacentElement('afterend', myFourth);
myFourth.insertAdjacentElement('afterend', myFifth);

document.body.appendChild(myList);
