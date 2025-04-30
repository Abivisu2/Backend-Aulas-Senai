import express from 'express';

const app = express();

let alunos = [];

app.use(express.json());

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

// 📍 Cadastro de aluno
app.post('/alunos', (req, res) => {
  const { nome, matricula, status } = req.body;

  if(!nome){
    return res.status(400).json({
      mensagem: "O campo 'nome' é obrigatório."})
  }

  if(nome.length >= 3){
    return res.status(400).json({
      mensagem:  "O nome deve conter pelo menos 3 caracteres."})
  }

  if(!matricula){
    return res.status(400).json({
      mensagem: "O campo 'matricula' é obrigatório."})
  }

  if(!status){
    return res.status(400).json({
      mensagem: "O campo 'status' é obrigatório."})
  }

  if(status !== "ativo" && status !== "inativo"){
    return res.status(400).json({
      mensagem: "O campo 'status' deve ser 'ativo' ou 'inativo'."
    })
  }

  const verificarMatricula = alunos.filter(aluno => aluno.matricula.toLowerCase() === matricula.toLowerCase())
  
    if(verificarMatricula.length > 0){
        return res.status(400).json({
        mensagem: "Já existe um aluno com essa matrícula."
      })
    } 

    alunos.push(
      {
        nome,
        matricula,
        status, 
        dataCriada: new Date().toISOString()  
      }
    )

  res.status(201).json({ mensagem: "Aluno cadastrado com sucesso." });

});

// 📍 Cadastro de notas
app.post('/alunos/:matricula/notas', (req, res) => {
  const {notas} = req.body;
  const {matricula} = req.params;

  if(alunos.length > 0){
    if(notas.length !== 4){
      return res.status(400).json({
       mensagem: "Tem que cadastrar exatamente 4 notas!" 
      })
    }
  }

  const aluno = alunos.filter(aluno => aluno.matricula === matricula)
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
      notas: aluno.nota
    }
  })

})

// 📍 Excluir aluno
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




