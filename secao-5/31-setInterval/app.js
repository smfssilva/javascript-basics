let number = 1
function showScore(...args) {
  console.log(`${number}- hello ${args[0]}, your score: ${args[1]}, ${args[2]}`);
  number += 1
  if (number === 11) clearInterval(first);
}

const first = setInterval(showScore, 1000, 'Silva', 10, 'Parabens');