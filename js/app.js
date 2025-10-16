let totalGeral;
limpar();

function adicionar() {
    // recuperar valores, nome do produto, quantidade e valores
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split ('-')[0];
    let valorUnitario = produto.split ('€')[1];
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">€${preco}</span>
        </section>`;
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `€ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;


    // adicionar produto no carrinho
    // atualizar valor total

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '€ 0';

}