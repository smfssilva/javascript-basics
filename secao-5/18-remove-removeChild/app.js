
const h3 = document.createElement('h3');
h3.innerText = 'h3';


const result = document.querySelector("#result");
const heading = document.querySelector('#title')

result.style.background = 'blue';
// document.body.insertBefore(h3, result);
result.prepend(h3);
// result.remove();

result.removeChild(heading);
