/* const age = 100;

function go() {
  const hair = 'blonde';
}

go(); */
/* 
function isCool(name) {
  if (name === 'wes') {
    var cool = true;
  }
  console.log(cool);
  return cool;
} */

const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog(dog);
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
