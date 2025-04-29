import express from 'express';

const app = express();

let alunos = [];

app.use(express.json());

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.post('/alunos', (req, res) => {
  const { nome, matricula, status } = req.body;

  if(!nome || !matricula || (status !== "ativo" && status !== "inativo")){
    return res.status(400).json({
      mensagem: 'Preencha todos os campos'
    })
  }

  const verificarMatricula = alunos.filter(aluno => aluno.matricula === matricula);
    if(alunos.length > 0){
      if (verificarMatricula) {
        return res.status(400).json({
        mensagem: 'Aluno com matrícula já cadastrada!'
      })}
    } 

    alunos.push(
      {
        nome,
        matricula,
        status, 
      }
    )

  res.json({
    mensagem: "Dados recebidos com sucesso!",
    body: { nome, matricula, status }
  });
});

app.post('/alunos/:matricula/notas', (req, res) => {
  const {notas} = req.body;
  const {matricula} = req.params;

  if(notas.length !== 4){
    return res.status(400).json({
     mensagem: "Tem que cadastrar exatamente 4 notas!" 
    })
  }

  const aluno = alunos.find(aluno => aluno.matricula === matricula)

  if(!aluno){
    return res.status(400).json({
      mensagem: "Este aluno não está cadastrado!"
    })
  }

  aluno.nota = [...notas];

  res.json({
    mensagem: "Notas autualizados com sucesso!",
    body: {
      nome: aluno.nome,
      matricula: aluno.matricula, 
      status: aluno.status,
      notas: aluno.notas
    }
  })

})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

app.delete("/alunos/:matricula", (req, res) => {
  const {matricula} = req.params;

  const removerAluno = alunos.filter(aluno => aluno.matricula === matricula)
  alunos.splice(removerAluno)

  res.json({
    mensagem: "Aluno removido!",
  })

})


//Instalar o thunder client para rodar
//dar um npm i, depois dar um npm i express, depois dar um npm start




