
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e.currentTarget);
    e.currentTarget.style.color = 'green';
    // console.log(e.target);
    // e.target.style.color = 'green';
  })
})