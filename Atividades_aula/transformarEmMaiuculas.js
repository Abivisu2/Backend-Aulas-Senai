// Objetivo: Dado um array de nomes, retornar um novo array com todos os nomes em letras maiúsculas.

const nomes = ['ana', 'bruno', 'carla'];

const arrayTransformado = nomes.map((nome) => {
    return nome.toUpperCase()
})

console.log("O array transformado com todas letras maiúscula: ", arrayTransformado)


// Resultado esperado: ['ANA', 'BRUNO', 'CARLA']