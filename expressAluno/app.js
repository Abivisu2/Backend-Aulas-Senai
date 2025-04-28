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
        return res.status(200).json({
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
  const {nome, matricula, status, notas} = req.body;

  alunos.push({
    nome,
    matricula,
    status, 
    notas
    
  })

  res.json({
    mensagem: "Notas autualizados com sucesso!",
    body: {nome, matricula, status, notas}
  })

})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


//Instalar o thunder client para rodar
//dar um npm i, depois dar um npm i express, depois dar um npm start




