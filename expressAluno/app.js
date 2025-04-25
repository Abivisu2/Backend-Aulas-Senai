import express from 'express';

const app = express();

let alunos = [];

app.use(express.json());

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.post('/alunos', (req, res) => {
  const { nome, matricula, status } = req.body;

  if(nome === "" && status != "ativo" || status != "inativo" & matricula === matricula){
    return console.Console("Todos dados são obrigatóriso!")
  }else{
    
    alunos.push(
      {
        nome,
        matricula,
        status, 
      }
    )
  }


  res.json({
    mensagem: "Dados recebidos com sucesso!",
    body: { nome, matricula, status }
  });
});

app.post('/alunos/:matricula/notas', (req, res) => {
  const {notas} = req.body;

  alunos.put({
    nome,
    matricula,
    status, 
    notas: [7.5, 8.0, 6.5, 9.0]
    
  })

})

app.delete('/items/:idItem',(req, res) => {

  const {idItem} = req.params;

  console.log("idItem", idItem)

  items = items.filter(item => {
    return item.id != idItem;
  });

  res.json({
    mensagem: "Dado deletado com sucesso!",
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


//Instalar o thunder client para rodar
//dar um npm i, depois dar um npm i express, depois dar um npm start




