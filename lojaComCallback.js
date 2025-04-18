
// const pedidos = [
//     { cliente: "Ana", valor: 150.00, tipo: "cartao" },
//     { cliente: "Bruno", valor: 89.90, tipo: "boleto" },
//     { cliente: "Carla", valor: 120.00, tipo: "pix" },
//     { cliente: "Diego", valor: 250.00, tipo: "cripto" },
//     { cliente: "Erica", valor: 45.00, tipo: "cartao" },
//     ];

//     const pagarComCartao = (pedido) => {
//         console.log(`💳 ${pedido.cliente} pagou R$${pedido.valor.toFixed(2)} com cartão de crédito.`);
//             };
            
//         const pagarComBoleto = (pedido) => {
//         console.log(`📄 Boleto gerado para ${pedido.cliente} no valor de R$${pedido.valor.toFixed(2)}.`);
//         };
            
//         const pagarComPix = (pedido) => {
//         console.log(`⚡ ${pedido.cliente} pagou R$${pedido.valor.toFixed(2)} via PIX.`);
//         };
            
//         const pagarComCripto = (pedido) => {
//         console.log(`🪙 ${pedido.cliente} pagou com cripto, equivalente a R$${pedido.valor.toFixed(2)}.`);
//         };
        


// const ValoresAcimaDeCem = pedidos.filter((ValorCliente) => {
//     return ValorCliente.valor > 100
// });

// console.log(`Os pedidos com valores acima de R$100 são:`);
// ValoresAcimaDeCem.forEach((pedido) => {
//     console.log(`${pedido.cliente} - ${pedido.valor} - ${pedido.tipo}`);

// });


// console.log(`\nOs pedidos mapeados são:`);
// const MapearPedidos = ValoresAcimaDeCem.map(pedidoMapeado => {
//     return pedidoMapeado
// }) 

// MapearPedidos.forEach((pedidosMapeados) => {
//     console.log(`${pedidosMapeados.valor} --- ${pedidosMapeados.tipo}`)
// })


console.log("Começando!!!");

const pedidos = [
  { cliente: "Ana", valor: 150.0, tipo: "cartao" },
  { cliente: "Bruno", valor: 89.9, tipo: "boleto" },
  { cliente: "Carla", valor: 120.0, tipo: "pix" },
  { cliente: "Diego", valor: 250.0, tipo: "cripto" },
  { cliente: "Erica", valor: 45.0, tipo: "cartao" },
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

const filtrarPedidos = (pedidos) => {
    return pedidos.filter(pedido => pedido.valor > 100)
}

const processaTipoPagamento = (tipo) => {
    switch (tipo) {
        case "cartao":
            return pagarComCartao;
        case "pix":
            return pagarComPix;
        case "dinheiro":
            return pagarComBoleto;
        case "cripto":
            return pagarComCripto;
        default:
            break;
    }

}

const processaPedidos = (pedidos) => {
    return pedidos.map(pedido => {
        const callback = processaTipoPagamento(pedido.tipo);

        return {
            ...pedido,
            callback
        };
    })
}

const finalizaPedidos = (pedidos) => {
    pedidos.forEach(pedido => {
        pedido.callback(pedido);
    })
}

const pedidosFiltrados = filtrarPedidos(pedidos);

const pedidosProcessados = processaPedidos(pedidosFiltrados);

finalizaPedidos(pedidosProcessados)


console.log("pedidos", pedidos);

// console.log("processado", pedidosProcessados)



