// Objetivo: Filtrar apenas os nomes que começam com a letra "A".

const nomes = ['Ana', 'Bruno', 'Amanda', 'Carlos'];

console.log(nomes.filter(nome => {
    return nome.startsWith("A")
}))

// const nomesFiltrados = nomes.filter(nome => nome.includes("A"))
// console.log(nomesFiltrados)

// Resultado esperado: ['Ana', 'Amanda']

// const nomes = ['Ana Catarina Vasconcelos', 'Marcos Bruno Oliveira Vilsa', 'Amanda Jesus Cristo', 'Carlos Roberto Cabral'];

// console.log(nomes.filter(nome => {
//     return nome.startsWith("V", nome.lastIndexOf(" ") + 1);
// }));