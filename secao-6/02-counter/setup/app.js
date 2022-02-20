let count = 0;

function changeColor() {
  const value = document.getElementById('value');
  value.innerText = count
  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  } else if (count === 0) {
    value.style.color = '#102a42'
  }
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('decrease')) {
    count -= 1;
    changeColor();
  } else if (e.target.classList.contains('reset')) {
    count = 0;
    changeColor();
  } else {
    count += 1;
    changeColor();
  }
})