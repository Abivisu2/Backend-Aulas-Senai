// Objetivo: Dado um array de números, retornar um novo array com o dobro de cada número.

const numeros = [2, 4, 6, 8];

const numerosMultiplicados = numeros.map((numero) => {
    return numero * 2
})

console.log("números multiplicados", numerosMultiplicados)

// Resultado esperado: [4, 8, 12, 16]
