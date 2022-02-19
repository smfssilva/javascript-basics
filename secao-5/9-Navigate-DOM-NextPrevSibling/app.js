const first = document.querySelector('.first');

const second = first.nextSibling.nextSibling;
second.style.color = 'blue';

console.log(second);

console.log(first);


const last = document.querySelector('#last');

third = last.previousSibling.previousSibling;
third.style.color = 'green';

console.log(third);
