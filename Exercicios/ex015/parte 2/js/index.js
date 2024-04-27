let burger = document.querySelector('.meat');

burger.addEventListener('click', () => {
  burger.textContent === "MENU" ? burger.textContent = "CLOSE" : burger.textContent = "MENU";
});