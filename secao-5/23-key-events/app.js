const nameInput = document.querySelector('#name')

// nameInput.addEventListener('keypress', function () {
//   console.log('you pressed key');
// })

// nameInput.addEventListener('keydown', function () {
//   console.log('you pressed key');
// })

nameInput.addEventListener('keyup', function (e) {
  console.log(e.target.value);
})


