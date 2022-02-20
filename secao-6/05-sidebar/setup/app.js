
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

function showSidbar() {
  sidebar.classList.toggle('show-sidebar')
}

toggleBtn.addEventListener('click', () => {
  showSidbar()
})

closeBtn.addEventListener('click', () => {
  showSidbar()
})

