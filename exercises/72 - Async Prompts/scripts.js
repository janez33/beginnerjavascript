function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely!
  popup.remove();
  // eslint-disable-next-line no-param-reassign
  popup = null; // wes bos has this esl lint rule to not re-assign function parameters
  console.log(popup);
}

function ask(options) {
  return new Promise(async function(resolve) {
    // First we need to create a popup with all the fields in it
    const popup = document.createElement('form'); // we use createElement so we can immediately put EventListeners on that object
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
            <label>${options.title}</label>
            <input type="text" name="input" />
            <button type="submit">Submit</button>
        </fieldset>
    `
    );

    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        function() {
          resolve(null);
          // Remove it from the DOM entirely
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        console.log('submittt');
        resolve(e.target.input.value);
        // Remove it from the DOM entirely
        destroyPopup(popup);
      },
      {
        once: true,
      }
    );
    // when someone does submit it, resolve the data that was in the input box!

    // insert that popup into the DOM
    document.body.appendChild(popup);
    // put a very small timeout before we add the open class
    await wait(50);
    popup.classList.add('open');
  });
}

// select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset; // You can also use --> button.hasAttribute('data-cancel')
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
  {
    title: 'What is your name?',
  },
  {
    title: 'What is your age?',
    cancel: true,
  },
  {
    title: 'What is your dogs name?',
  },
];

// utility function
async function asyncMap(array, callback) {
  // make an array to store results
  const results = [];
  // loop over our array
  for (const item of array) {
    results.push(await callback(item));
  }
  // when we are done the loop, return it!
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

/* async function askMany() {
  for (const question of questions) {
    const answer = await ask(question);
    console.log(answer);
  }
}

askMany(); */

// not a good way examples because it pops them all at once and we want to ask sequentially
// Example 3
/* questions.forEach(async function(question) {
  const answer = await ask(question);
  console.log(answer);
}); */

// Example 2
/* Promise.all(questions.map(ask)).then(data => {
  console.log(data);
}); */

// Example 1
/* const answers = Promise.all([
  ask(questions[0]),
  ask(questions[1]),
  ask(questions[2]),
]).then(answers => {
  console.log(answers);
}); */
