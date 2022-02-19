const headings = document.getElementsByTagName('h2');
console.log(headings);

headings[0].style.color = 'blue';
headings[1].style.color = 'red';

const colors = ['red', 'green', 'yellow', 'blue', 'magenta'];
let i = 0;

const items = [...document.getElementsByTagName('li')];

items.forEach(item => {
  item.style.color = colors[i];
  i+=1;
});