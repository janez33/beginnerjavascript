import wait from 'waait';
import { faker } from '@faker-js/faker';
import {
  formatDistance,
  intervalToDuration,
  formatDistanceToNowStrict,
  format,
} from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';

// console.log(`Hello ${faker.person.firstName()}`);
const fakeNames = Array.from({ length: 10 }, faker.person.firstName);
const fakeFullNames = Array.from(
  { length: 10 },
  () => `${faker.person.firstName()} ${faker.person.lastName()}`
);

async function go() {
  console.log('Going!');
  await wait(200);
  console.log('ending!');
}

const diff = formatDistance(new Date('1992/04/28'), new Date(), {
  addSuffix: true,
});
const diff2 = intervalToDuration({
  start: new Date(1992, 8, 29),
  end: new Date(2023, 11, 26),
});

console.log(diff2);

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data);
}
getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 8, 3, 7, 453, 34];

const sameValues = intersection(a, b);
console.log(sameValues);

const person1 = { name: 'wes' };
const person2 = { name: 'wes' };

console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
  return new Promise(function(resolve, reject) {
    if (firstName === 'Wes') {
      resolve('Cool name');
      return;
    }
    reject(new Error('not a cool name'));
  });
}

async function checkName() {
  const [error, successValue] = await to(checkIfNameIsCool('Wes'));
  if (error) {
    console.log(error);
  } else {
    console.log(successValue);
  }
}

checkName();
