const form = document.getElementById('form');
const nome = document.getElementById('name');
const password = document.getElementById('password');


form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('form submited');
  console.log(nome.value);
  console.log(password.value);
  // e.target.submit();
})