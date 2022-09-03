const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar-menu');

navbar.addEventListener('click', handleNavBar);

function handleNavBar() {
  navbarMenu.classList.toggle('show');
}
