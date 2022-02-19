
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');

console.log(first);


second.classList.add('text', 'colors');
third.classList.add('text');
first.classList.remove('colors')
console.log(second.getAttribute('class'));