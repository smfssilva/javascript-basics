const result = document.querySelector('#result');


result.style.backgroundColor = 'blue';

const items = document.querySelectorAll('.special');

items.forEach(function (item) {
  item.style.color = 'white';
})