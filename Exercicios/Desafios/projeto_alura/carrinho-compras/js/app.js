let valorTotal;
limpar();

function adicionar() {
    const produto = document.querySelector('#produto').value;
    const quantidade = document.querySelector('#quantidade').value;

    const nomeProduto = produto.split('-')[0];
    const valorProduto = produto.split('R$')[1];
    const price = quantidade * valorProduto;

    let carrinho = document.querySelector('#lista-produtos');
    const productSection = document.createElement('section');
    productSection.className = 'carrinho__produtos__produto';
    productSection.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`;

    carrinho.appendChild(productSection);

    if (carrinho.scrollHeight > 220) {
        carrinho.style.overflowY = 'scroll';
    } else {
        carrinho.style.overflowY = 'hidden';
    };

    let spanValorTotal = document.querySelector('#valor-total');
    valorTotal = valorTotal + price;
    spanValorTotal.textContent = `R$ ${valorTotal}`;
    document.querySelector('#quantidade').value = '';
};

function limpar() {
    valorTotal = 0;
    document.querySelector('#lista-produtos').innerHTML = '';
    document.querySelector('#valor-total').textContent = 'R$0';
}