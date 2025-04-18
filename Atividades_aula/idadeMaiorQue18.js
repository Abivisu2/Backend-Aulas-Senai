// Objetivo: Dado um array de idades, filtre e retorne apenas as idades maiores ou iguais a 18.
const idades = [12, 18, 21, 14, 30];

const maiorIdade = idades.filter(idade => idade >= 18)
console.log("Idades iguais ou maior que 18: ", maiorIdade)

// As voltas que dei
// const filtrarIdades = ((idade) => {
//     return idade >= 18
// })

// const idadeFiltrada = idades.filter(filtrarIdades)
// idadeFiltrada.forEach((idade) => {  
//     console.log(`Idades maiores ou iguais a 18: ${idade}`)
// });

// Resultado esperado: [18, 21, 30]