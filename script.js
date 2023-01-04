const openMenuButton = document.querySelector('#openMenu')
const closeMenuButton = document.querySelector('#closeMenu')
const menuMobile = document.querySelector('#mobileMenu')
const blurDiv = document.querySelector('.blurDiv')


openMenuButton.addEventListener('click', (e) => {
  openMenu();
})

closeMenuButton.addEventListener('click', (e) => {
  closeMenu();
})

function openMenu() {
  // document.body.style.filter = "brightness(30%)";
  openMenuButton.style.display = "none";
  closeMenuButton.style.display = " block";
  menuMobile.style.display = "flex";
  blurDiv.style.display = "block"
  setTimeout(() => {
    menuMobile.style.right = "0";

  }, 10)
}

function closeMenu() {
  // document.body.style.filter = "brightness(100%)";
  closeMenuButton.style.display = "none";
  openMenuButton.style.display = " block";
  menuMobile.style.right = "-100%";
  blurDiv.style.display = "none"
  setTimeout(() => {
    menuMobile.style.display = "none";
  }, 500)
}

console.log(document.body)