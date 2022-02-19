const first = document.querySelector('.first');
const link = document.querySelector('#link');

const valueClass = first.getAttribute('class');
console.log(valueClass);

const valueHref = link.getAttribute('href');
console.log(valueHref);

const last = link.nextElementSibling;
console.log(last);

last.setAttribute('class', 'first');

last.textContent = 'I also have a class of first'

console.log(document.querySelectorAll('.first'));

