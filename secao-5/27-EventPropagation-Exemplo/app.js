const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');

function sayHello() {
  console.log('hello there');
}

btn.addEventListener('click', function () {
  const el = document.createElement('h1');
  el.classList.add('heading')
  el.textContent = `i'm insede the container`
  container.appendChild(el);
})

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('heading')) {
    console.log('hello there');
  }
})
// heading.addEventListener('click', sayHello);