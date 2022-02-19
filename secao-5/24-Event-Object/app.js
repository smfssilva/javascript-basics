const heading = document.querySelector('h1')
const btn = document.querySelector('.btn')
const link = document.querySelector('a')

heading.addEventListener('click', (e) => {
  e.currentTarget.classList.add('blue')
})

function someFunction(e) {
  e.preventDefault();
}

link.addEventListener('click', someFunction)

