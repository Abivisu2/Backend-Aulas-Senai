// Objetivo: Dado um array de objetos com produtos, retornar um novo array com o nome e o preço com 10% de desconto.

const produtos = [
    { nome: 'Camiseta', preco: 50 },
    { nome: 'Calça', preco: 80 },
    { nome: 'Tênis', preco: 120 }
  ];

const transformarArray = produtos.map((produto) => {
    percentualDesconto = produto.preco * 0.1;
    novoPreco = produto.preco - percentualDesconto;
    
    return {
        nome: produto.nome,
        precoComDesconto: novoPreco
    }

})

console.log(`O novo array fica da seguinte forma! \n`, transformarArray)

  // Resultado esperado:
  // [
  //   { nome: 'Camiseta', precoComDesconto: 45 },
  //   { nome: 'Calça', precoComDesconto: 72 },
  //   { nome: 'Tênis', precoComDesconto: 108 }
  // ]
  