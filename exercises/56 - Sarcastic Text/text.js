const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInput = document.querySelectorAll('[name="filter"');

console.log(textarea);
console.log(result);
console.log(filterInput);

function transformText(text) {
  result.textContent = 'Transformed text';
}
