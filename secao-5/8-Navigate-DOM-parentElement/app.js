const heading = document.querySelector('h2');
heading.parentElement.style.backgroundColor = 'blue';
heading.parentElement.style.color = 'white';

heading.parentElement.parentElement.style.backgroundColor = 'grey';


heading.parentElement.style.textAlign = 'center';

console.log(heading.parentElement);