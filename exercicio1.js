//1-Crie uma função que retorna a comissão do valor das vendas do seguinte array [10000, 5000, 6000, 9000], sabendo que a comissão se da em 10% do valor. Apresente o resultado em um console.log dentro da estrutura.

const vendas = [10000, 5000, 6000, 9000]

// const resultado = vendas.map( comissao => {

//     return comissao * 0.1

// })

// console.log("A comissão é de:", resultado)


function calculaComissao(valor) {
    const comissao = valor * 0.1;

    console.log("A venda de " + valor + " teve comissão de "+ comissao)
}

vendas.forEach(ValorVenda => {
    calculaComissao(ValorVenda)
});