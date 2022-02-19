const heading = document.querySelector('h2')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  console.log('you click-me');
})

btn.addEventListener('mousedown', () => { console.log('down') })
btn.addEventListener('mouseup', () => { console.log('up') })
heading.addEventListener('mouseenter', () => { heading.classList.add('red') })
heading.addEventListener('mouseleave', () => { heading.classList.remove('red') })
