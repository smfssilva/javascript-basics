const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 3)
  document.body.style.background = colors[randomNumber]
  color.textContent = colors[randomNumber]
})
