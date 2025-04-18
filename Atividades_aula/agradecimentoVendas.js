// Objetivo: Dado um array de objetos representando vendas, exiba uma mensagem de agradecimento personalizada para cada cliente que gastou mais de R$100.

const vendas = [
  { cliente: 'João', valor: 80 },
  { cliente: 'Maria', valor: 150 },
  { cliente: 'Pedro', valor: 120 }
];

const agradecerClientes = vendas.forEach((venda) => { 
    if(venda.valor > 100){
        console.log(`Obrigado pela compra, ${venda.cliente}! Você gastou ${venda.valor}`)
    }   
})

// Saída esperada:
// Obrigado pela compra, Maria! Você gastou R$150.
// Obrigado pela compra, Pedro! Você gastou R$120.
