
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

let date = new Date();

console.log(days[date.getDay()]);
console.log(months[date.getMonth()]);
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

setInterval(() => {
  let date = new Date();
  document.querySelector('h1').innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000);
