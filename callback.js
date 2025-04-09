// crie uma funcao ( compra ) que receba uma funcao de callback onde deve se realizar todo o processamento dos produtos, alem do metodo que da baixa no sistema com o pagamento aprovado.
// Crie mais 2 funcoes que vao ser as funcoes de callback que serao chamadas dentro da funcao compra, uma se chama pagamentoPix e outra se chama pagamentoCartao, a pagamento pix devera ter uma funcao dentro dela onde aparece um console.log("QRcode disponivel"), alem de um outro console log ("Pagamento efetuado") na ultima etapa da funcao. Ja a funcao pagamento devera ter um console de ("Inserindo dados do cartao") alem de ter um console no final da funcao de "Pagamento aprovado".

const compra = (callback) => {
    console.log("Processamento do produto")
    console.log("Realizando pagamento")
    callback();
}


const pagamentoPix = (callback) => {
    console.log("Qrcode disponível")
    callback();
}

const pagamentoCartao = (callback) => {
    console.log("Inserindo dados do cartão");

}

compra(pagamentoCartao)
compra(pagamentoPix)