import { returnHi as sayHi, last, middle } from './utils.js';
// import ellen from './wes.js';
import { handleButtonCLick } from './handlers.js';
import * as everything from './wes.js';

const button = document.querySelector('button');

button.addEventListener('click', handleButtonCLick);

// console.log(everything);
// console.log(ellen);
// console.log(sayHi);
// const name = 'Janez';

// console.log(returnHi(name));
// console.log(middle);
// console.log("hello I'm here");
