function sayHello() {
  console.log('hello silva');
}

setTimeout(sayHello, 1000);
setTimeout(sayHello, 5000);

function showScore(...args) {
  console.log(`hello ${args[0]}, your score: ${args[1]}, ${args[2]}`);
}

const first = setTimeout(showScore, 10000, 'Sivanilson', 100, 'Parabens')

setTimeout(() => {
  console.log('limpando o primeiro timeout');

  clearTimeout(first);
}, 3000);
