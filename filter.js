
//Apresente uma mensagem com as médias dos alunos que foram aprovados e uma outra mensagem com os alunos que ficaram de recuperação. Nota minima para ser aprovado é 7

const medias = [
    {nome: "João", nota: 7},
    {nome: "Marcos", nota: 5},
    {nome: "Maria", nota: 8},
    {nome: "Bruno", nota: 10},
    {nome: "Kleber", nota: 4},
    {nome: "Josue", nota: 6},
    {nome: "Julia", nota: 7},
    {nome: "Pilar", nota: 10},
    {nome: "Robert", nota: 2},
    {nome: "Glauber", nota: 6},

];

const aprovados = medias.filter((notaAluno) => {
    return notaAluno.nota >=7
});
console.log("\nAprovados")

aprovados.forEach((aluno) => {
    console.log(`${aluno.nome}: ${ aluno.nota}`)
})

const recuperacao = medias.filter((notaAluno) => {
    return notaAluno.nota < 7
});
console.log("Alunos em recuperação", recuperacao);








