// 3) Apresente uma mensagem com as medias dos alunos que foram aprovados e uma outra mensagem com os alunos que ficaram de recuperação. Nota minima para ser aprovado e 7.
const medias = [
  { nome: "Joao", nota: 7 },
  { nome: "Marcos", nota: 5 },
  { nome: "Maria", nota: 8 },
  { nome: "Bruno", nota: 10 },
  { nome: "Kleber", nota: 4 },
  { nome: "Josue", nota: 6 },
  { nome: "Julia", nota: 7 },
  { nome: "Pilar", nota: 10 },
  { nome: "Robert", nota: 2 },
  { nome: "Glauber", nota: 6 },
];  

const calculaAprovado = (aluno) => {
    return aluno.nota >= 7;
}

const calculaReprovado = (aluno) => {
    return aluno.nota < 7;
}

const alunosAprovados = medias.filter(calculaAprovado);
const alunosReprovados = medias.filter(calculaReprovado);

alunosAprovados.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} foi aprovado!`);
});

alunosReprovados.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} foi reprovado com nota ${aluno.nota}!`);
});

