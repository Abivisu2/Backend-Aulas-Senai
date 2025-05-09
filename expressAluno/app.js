
import express from 'express';
import {Client} from 'pg';

// TODO: Conexao postgres
const client = new Client({
  user: 'abilio_user',
  host: 'dpg-d0ekb195pdvs73aphghg-a.oregon-postgres.render.com',
  database: 'abilio',
  password: 'pMKRFlnZIV6eVWqOnGcNsbWSJPbuCoKZ',
  port: 5432,
  ssl: true
});

client.connect()
  .then(() => console.log("Conectado com sucesso!"))
  .catch(err => console.error("Erro ao conectar: ", err.stack));

  // Início da aplicação de cadastro de alunos
const app = express();
let alunos = [];
app.use(express.json());

// 📍 Cadastro de aluno
app.post('/alunos', (req, res) => {
  const { nome, matricula, status } = req.body;

  if(!nome){
    return res.status(400).json({
      mensagem: "O campo 'nome' é obrigatório."})
  }

  if(nome.length < 3){
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
        return res.status(409).json({
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

  if(!notas || !Array.isArray(notas)){
    return res.status(400).json({
     mensagem: "O campo 'notas' é obrigatório e deve ser um array de 4 números." 
    })
  }

  if(notas.length !== 4){
    return res.status(400).json({
      mensagem:"Devem ser fornecidas exatamente 4 notas."
    })
  }

  const alunoIndex = alunos.findIndex(aluno => aluno.matricula === matricula)
  if(alunoIndex === -1){
    return res.status(404).json({
      mensagem: "Aluno não encontrado."
    })
  }

  if(alunos[alunoIndex].status === "inativo"){
    return res.status(403).json({
      mensagem: "Não é possível cadastrar notas para alunos inativos."
    })
  }

  alunos[alunoIndex].notas = [...notas];

  const verificarNotas = alunos[alunoIndex].notas.find(nota => nota < 0.0 || nota > 10.0)
  if(verificarNotas){
    return res.status(400).json({
      mensagem: "As notas devem estar entre 0 e 10."
    })
  }

  res.status(200).json({
    mensagem: "Notas cadastradas com sucesso.",
  })

});

// 📍 Excluir aluno
app.delete("/alunos/:matricula", (req, res) => {
  const {matricula} = req.params;

  const alunoIndex = alunos.findIndex(aluno => aluno.matricula === matricula)
  if(alunoIndex === -1){
    return res.status(404).json({
      mensagem: "Aluno não encontrado."
    })
  }

  alunos[alunoIndex].status = "inativo"
  // const alunoRemovido = alunos.splice(alunoIndex, 1)
  res.status(200).json({
    mensagem: "Aluno removido com sucesso.",
  })

})

// 📍 Listar todos os alunos e com status ativos
app.get("/alunos", (req, res) => {
  const {status} = req.query;

  if (!status) {
    return res.status(200).json({ body: alunos });
  }

  const alunosFiltrados = alunos.filter(aluno => 
    aluno.status.toLowerCase() === status.toLowerCase()
  );
  return res.status(200).json({ body: alunosFiltrados });

});

// 📍 Listar alunos com notas e médias
app.get("/alunos/notas", (req, res) => {
  const { status } = req.query;
  const alunosComNotasEmedias = [];

  alunos.forEach(aluno => {
    
    const statusValido = aluno.status.toLowerCase() === "ativo" &&
      (!status || aluno.status.toLowerCase() === status.toLowerCase());

    const notasValidas = Array.isArray(aluno.notas) && aluno.notas.length === 4;

    if (statusValido && notasValidas) {
      const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
      const media = (soma / 4) 

      let situacao = "";
      if (media >= 7) {
        situacao = "aprovado";
      } else if (media >= 5) {
        situacao = "recuperação";
      } else {
        situacao = "reprovado";
      }

      alunosComNotasEmedias.push({
        nome: aluno.nome,
        matricula: aluno.matricula,
        notas: aluno.notas,
        media,
        situacao
      });
    }
  });

  return res.status(200).json(alunosComNotasEmedias);
});

// 📍 Buscar aluno por matrícula
app.get("/alunos/:matricula", (req, res) => {
  const { matricula } = req.params;

  const aluno = alunos.find(aluno => aluno.matricula.toLowerCase() === matricula.toLowerCase());

  if (!aluno) {
    return res.status(404).json({ erro: "Aluno não encontrado." });
  }

  const notas = aluno.notas;
  let media = null;
  let situacao = null;
  let dataAlteracao = new Date().toISOString()

  if (Array.isArray(notas) && notas.length === 4) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    media = (soma / 4)

    if (media >= 7) {
      situacao = "aprovado";
    } else if (media >= 5) {
      situacao = "recuperação";
    } else {
      situacao = "reprovado";
    }
  }

  return res.status(200).json({
    nome: aluno.nome,
    matricula: aluno.matricula,
    status: aluno.status,
    notas: aluno.notas,
    media,
    situacao,
    dataCriada: aluno.dataCriada,
    dataAlteracao: dataAlteracao
  });
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

//Instalar o thunder client
//dar um npm i, depois dar um npm start

