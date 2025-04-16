
const pedidos = [
    { cliente: "Ana", valor: 150.00, tipo: "cartao" },
    { cliente: "Bruno", valor: 89.90, tipo: "boleto" },
    { cliente: "Carla", valor: 120.00, tipo: "pix" },
    { cliente: "Diego", valor: 250.00, tipo: "cripto" },
    { cliente: "Erica", valor: 45.00, tipo: "cartao" },
    ];

    const pagarComCartao = (pedido) => {
        console.log(`💳 ${pedido.cliente} pagou R$${pedido.valor.toFixed(2)} com cartão de crédito.`);
            };
            
        const pagarComBoleto = (pedido) => {
        console.log(`📄 Boleto gerado para ${pedido.cliente} no valor de R$${pedido.valor.toFixed(2)}.`);
        };
            
        const pagarComPix = (pedido) => {
        console.log(`⚡ ${pedido.cliente} pagou R$${pedido.valor.toFixed(2)} via PIX.`);
        };
            
        const pagarComCripto = (pedido) => {
        console.log(`🪙 ${pedido.cliente} pagou com cripto, equivalente a R$${pedido.valor.toFixed(2)}.`);
        };
        


const ValoresAcimaDeCem = pedidos.filter((ValorCliente) => {
    return ValorCliente.valor > 100
});

console.log(`Os pedidos com valores acima de R$100 são:`);
ValoresAcimaDeCem.forEach((pedido) => {
    console.log(`${pedido.cliente} - ${pedido.valor} - ${pedido.tipo}`);

});


console.log(`\nOs pedidos mapeados são:`);
const MapearPedidos = ValoresAcimaDeCem.map(pedidoMapeado => {
    return pedidoMapeado
})

MapearPedidos.forEach((pedidosMapeados) => {
    console.log(`${pedidosMapeados.valor} --- ${pedidosMapeados.tipo}`)
})






