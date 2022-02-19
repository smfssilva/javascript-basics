

const items = [...document.getElementsByClassName('special')];


items.forEach(function (item) {
  
  if(item.innerText ==='banana') item.style.color = 'green';
})