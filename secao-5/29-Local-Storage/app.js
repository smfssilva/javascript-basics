// localStorage.setItem('name', 'Silva');
// sessionStorage.setItem('name', 'Silva')
const ul = document.createElement('ul');

const pessoa = [
  {
    name: 'Silva',
    age: 44
  },
  {
    name: 'Cris',
    age: 42
  },
  {
    name: 'Andressa',
    age: 22
  },
  {
    name: 'Thawanna',
    age: 16
  },
  {
    name: 'Zeca',
    age: 10
  },
  {
    name: 'billy',
    age: 10
  },
  {
    name: 'Bob',
    age: 8
  },
  {
    name: 'Princesa',
    age: 8
  },
  {
    name: 'Michael',
    age: 6
  },
]

localStorage.setItem('Familia', JSON.stringify(pessoa));
const fromLocalStorage = JSON.parse(localStorage.getItem('Familia'));


if (fromLocalStorage !== null) {

  fromLocalStorage.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `Name: ${p.name} Age:${p.age}`
    ul.appendChild(li);
  })
  document.body.appendChild(ul);
}
