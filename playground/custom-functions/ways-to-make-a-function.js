/* function doctorize(firstName) {
  return `Dr. ${firstName}`;
} */

/* // Anon Function
function (firstName) {
    return `Dr. ${firstName}`;
} */

/* // Function Expression
const doctorize = function(firstName) {
  doesntExist();
  return `Dr. ${firstName}`;
}; */

/* eslint-disable */
const inchToCM = inches => inches * 2.54;

function add(a, b = 3) {
  const total = a + b;
  return total;
}

const add2 = (a,b = 3) => a+b;

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

(function(age) {
  return `You are cool and you are ${age}`;
})(10);

const wes = {
  name: "Wes Bos",
  sayHi: function() {
    console.log('Hey wes');
    return 'Hey wess'
  },
  // short hand propery
  yellHi() {
    console.log('Hey Janez!');
  }
}

//Callback function
// quick callback
const button = document.querySelector('.clickMe');

button.addEventListener('click', wes.yellHi);
// timer callback
setTimeout(wes.yellHi, 2000);

