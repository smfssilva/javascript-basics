window.addEventListener('load', function () {
  const img = document.createElement('img');
  img.src = 'https://images.pexels.com/photos/9667784/pexels-photo-9667784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  // img.style.width = '100vw';
  img.style.height = '100vh';
  console.log('hello');
  this.document.body.appendChild(img);
})

