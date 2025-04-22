// 🧩 Desafio Extra: Controle de Estoque com Streams
// 🛒 Cenário:
// Você tem uma lista de produtos de um mercado. Cada produto tem:
// nome, categoria, preco, estoque (quantidade em estoque)
// 🧪 Objetivo:
// Filtrar os produtos com estoque menor que 10 unidades
// Mapear para criar um novo array com os nomes e preços com 15% de desconto
// forEach para exibir um alerta no console:
// fazer todos os metodos encadeados.
// 📥 Dados:

const produtos = [
  { nome: 'Arroz', categoria: 'Alimento', preco: 25, estoque: 5 },
  { nome: 'Feijão', categoria: 'Alimento', preco: 10, estoque: 15 },
  { nome: 'Sabonete', categoria: 'Higiene', preco: 3, estoque: 8 },
  { nome: 'Detergente', categoria: 'Limpeza', preco: 4, estoque: 3 },
  { nome: 'Papel Higiênico', categoria: 'Higiene', preco: 12, estoque: 20 }
];

// const produtosComEstoqueMenorQueDez = produtos.filter(produto => produto.estoque < 10)
// // console.log("Produtos filtrados",produtosComEstoqueMenorQueDez);

// const aplicarDesconto = produtosComEstoqueMenorQueDez.map((produto) => {
//     percentualDesconto = produto.preco * 0.15
//     desconto = produto.preco - percentualDesconto

//     return{
//         nome: produto.nome,
//         categoria: produto.categoria,
//         precoComDesconto: desconto,
//         estoque: produto.estoque
//     }
// })
// // console.log("Produtos mapeados e com desconto", aplicarDesconto);

// const exibirProdutos = aplicarDesconto.forEach((produto) => {
//     console.log(`Estoque baixo: Produto ${produto.nome} - Novo Preço R$${produto.precoComDesconto.toFixed(2)}`)
// })

// 🔚 Resultado esperado (exemplo):
// Estoque baixo: Produto Arroz - Novo Preço: R$21.25
// Estoque baixo: Produto Sabonete - Novo Preço: R$2.55
// Estoque baixo: Produto Detergente - Novo Preço: R$3.40


// Versão do exercício encadeada
produtos
        .filter(({estoque}) => estoque < 10)
        .map(({nome, preco}) => {
            let precoAtualizado = preco * .85
            return{
                nome,
                preco: precoAtualizado
            }
        })
        .forEach(({nome, preco}) => console.log(`Estoque baixo: produto ${nome} novo preço R$${preco.toFixed(2)}`))
