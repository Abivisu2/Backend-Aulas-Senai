// Objetivo: Dado um array de produtos, filtre aqueles com preço acima de R$100 e que estejam disponíveis (disponivel: true).

const produtos = [
  { nome: 'Notebook', preco: 3000, disponivel: true },
  { nome: 'Mouse', preco: 50, disponivel: true },
  { nome: 'Teclado', preco: 150, disponivel: false },
  { nome: 'Monitor', preco: 500, disponivel: true }
];

const filtraProdutos = produtos.filter(produto => produto.preco > 100 & produto.disponivel === true);
console.log(filtraProdutos)

// Também pode ser ser feito da seguinte forma
// const filtraProdutos = produtos.filter(produto => produto.preco > 100 & !produto.disponivel);
// console.log("produtos indiponíveis",filtraProdutos)

// const filtraProdutos = produtos.filter(produto => produto.preco > 100 & produto.disponivel);
// console.log("produtos diponíveis",filtraProdutos)

// Para os indisponíveis
// const filtraProdutos = produtos.filter((produto) => {
//   return !produto.disponivel
// });
// console.log("produtos insisponíveis", filtraProdutos)

// Resultado esperado:
// [
//   { nome: 'Notebook', preco: 3000, disponivel: true },
//   { nome: 'Monitor', preco: 500, disponivel: true }
// ]