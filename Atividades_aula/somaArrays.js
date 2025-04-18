// Objetivo: Some todos os números de um array e mostre o total no final.

const numeros = [10, 20, 30];

let total
const somarNumeros = numeros.forEach((numero) => { 
    total = numero + numero
})
console.log("Total: ", total)  

// Resultado esperado no console:
// Total: 60
