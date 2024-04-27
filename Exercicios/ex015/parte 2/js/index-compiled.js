let burger = document.querySelector('.meat');
let corpo = document.querySelector('.corpo');
let titulo = document.querySelector('.titulo');
let menu = document.querySelector('#navegacao');
burger.addEventListener('click', () => {
  burger.textContent === "MENU" ? burger.textContent = "FECHAR" : burger.textContent = "MENU";

  corpo.classList.toggle('corpo-com-bg')
  titulo.style.zIndex = titulo.style.zIndex === "0" ? "3" : "0";
  menu.classList.toggle('oculto')
});
