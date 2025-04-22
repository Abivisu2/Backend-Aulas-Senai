const produtosComEstoqueMenorQueDez = produtos.filter(produto => produto.estoque < 10)
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