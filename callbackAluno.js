// // funcao de callback
// const get = callback => {
//     const request = {
//         body: {
//             nome:"Maria",
//             idade: 25
//         }
//     }
//     const response = {
//         json: (texto) => {
//             console.log("Mensagem de texto", texto)
//         }
//     }
//     console.log("Esta e a mensagem da funcaoMensagem");
//     callback(request, response);
// }


// get((req, res) => {
//     console.log("Esta e a mensagem do callback1")
//     res.json("Meu texto")
// });

// get((req, res) => {
//     console.log("Esta e a mensagem do callback2")
//     console.log(req.body.nome);
// });



// Atividade para quinta
// crie uma funcao que receba por paramentro um callback, onde espera receber um parametro de objeto que contenha o nome, a disciplina e a idade do aluno.
// As funcoes de callback serao 3, uma funcao apresenta o nome do aluno (console.log), uma outra trabalha com a idade do aluno e a 3 trabalha em qual disciplina aquele aluno esta estudando.

const aluno = {
    nome: "Abi",
    disciplina: "Teste de sistema",
    idade: 23
}

const Objeto = (callback) => {
    callback(aluno)
}

const NomeDoAluno = (aluno) => {
    console.log(`O nome do aluno é: ${aluno.nome}`)
}

const DisciplinaDoAluno = (aluno) => {
    console.log(`O ${aluno.nome} está matriculado na disciplina ${aluno.disciplina}`)   
}

const IdadeDoAluno = (aluno) => {
    console.log(`O ${aluno.nome} que está matriculado na disciplina ${aluno.disciplina} tem ${aluno.idade} anos de idade.`)
}

Objeto(NomeDoAluno);
Objeto(DisciplinaDoAluno);
Objeto(IdadeDoAluno);