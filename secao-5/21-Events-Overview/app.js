const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');
const p = document.querySelector('p')

const changeColors = () => {
  heading.classList.remove('blue')
  heading.classList.toggle('red');
}

btn.addEventListener('click', () => {
  console.log('clicou');
  heading.classList.add('blue');
})

p.addEventListener('click', changeColors)
