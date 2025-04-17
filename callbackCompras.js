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

//1- Filtrar só pedidos com valor acima de R$100 (com filter)

//Pode ser feito dessa forma
//const filtrarPedidos = pedidos.filter((pedido) => {
//    return pedido.valor > 100
//})

//Esse é o jeito que foi ensinado em aula
const filtrarPedidos = (pedidos) => {
   return pedidos.filter(pedido => pedido.valor > 100)
}

//2. Mapear os pedidos para preparar os callback dos dados (`map`)

const processarTipoPagamento = (tipo) => {
    switch (tipo) {
        case 'cartao':
            return pagarComCartao;
            break;
        
        case 'boleto':
            return pagarComBoleto;
            break;
        
        case 'pix':
            return pagarComPix;
            break;
        
        case 'cripto':
            return pagarComCripto;
            break;

        default:
            break;
    }
}

//3. Processar os pagamentos com `forEach`, usando  callbacks diferentes

const processaPedidos = (pedidos) => {
    return pedidos.map(pedido => {
        const callback = processarTipoPagamento(pedido.tipo);

        return {
            ...pedido,
            callback
        };
    });
};

const finalizarPedidos = (pedidos) => {
    pedidos.forEach(pedido => {
        pedido.callback(pedido);
    })
}

const pedidosFiltrados = filtrarPedidos(pedidos);
const pedidosProcessados = processaPedidos(pedidosFiltrados);
finalizarPedidos(pedidosProcessados);

console.log("pedidos", pedidos);
// console.log("processado", pedidosProcessados)


