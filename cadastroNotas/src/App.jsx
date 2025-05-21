import { useState } from 'react'
import { Box, Button, Stack, TextField, Typography, withTheme } from '@mui/material';


function App() {

  const [aluno, setAluno] = useState({
    nome: '',
    matricula: '',
    status: '',
    nota1: '',
    nota2: '',
    nota3: '',
    nota4: ''
  })

  // A função permite atualizar cada campo que for alterada através do Id, mudando o valor da instância do objeto.
  function handleChange(e) {
    const { id, value } = e.target;
    setAluno({
      ...aluno,
      [id]: value
    });
    
    /*setAluno(prevState => ({
      ...prevState,
      [id]: value
    }));*/
  }

  function salvarDados() {
    console.log(aluno)
    if (aluno.nome == "" || aluno.matricula == '' || aluno.status == '' || aluno.nota1 == '' || aluno.nota2 == '' || aluno.nota3 == ''|| aluno.nota4 == '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    
    localStorage.setItem('alunoData', JSON.stringify(aluno));
    alert('Dados salvos com sucesso!');
    
    setAluno({
      nome: '',
      matricula: '',
      status: '',
      nota1: '',
      nota2: '',
      nota3: '',
      nota4: ''
    });
  }

  function limparDados() {
    setAluno({
      nome: '',
      matricula: '',
      status: '',
      nota1: '',
      nota2: '',
      nota3: '',
      nota4: ''
    });
  }
  
  // ajustar as boxes para ter um tamanho ideial e ser responsivo

  return (
    <div>
      <Box sx={{ p: '0', m: '0', width: '100vw', height: '100vh', backgroundColor: 'whitesmoke', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }}>

        <Box sx={{ width: '80%', height: '20%', bgcolor: '#008DA9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Stack sx={{ width: '60%', height: '60%', backgroundColor: '#008DA9', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <Typography variant="h3" component="h2" sx={{ color: 'white', display: 'flex', justifyContent: 'center', fontFamily: 'fantasy'}}> Cadastro de notas </Typography>
          </Stack>

        </Box>

        <Box sx={{ p: '0px', m:0, width: '80vw', height: '60vh', backgroundColor: '#008DA9', display: 'flex', justifyContent: 'center', alignItems: 'start'}}>
          <Stack size={{xs:12}}  sx={{ p: '20px', m:0,  height: '90%', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center', overflow: 'auto', borderRadius: '20px'}}>

            <TextField onChange={handleChange} value={aluno.nome} size='small' id="nome" label="Nome Completo" variant="outlined" sx={{ width: '95%'}}/>
            <TextField onChange={handleChange} value={aluno.matricula} size='small' id="matricula" label="Número de Matrícula " variant="outlined" sx={{ width: '95%'}}/>
            <TextField onChange={handleChange} value={aluno.status} size='small' id="status" label="Status do Aluno" variant="outlined" sx={{ width: '95%'}}/>
            <TextField onChange={handleChange} value={aluno.nota1} size='small' id="nota1" label="Nota 1" variant="outlined" sx={{ width: '95%'}}/>
            <TextField onChange={handleChange} value={aluno.nota2} size='small' id="nota2" label="Nota 2" variant="outlined" sx={{ width: '95%'}}/>
            <TextField onChange={handleChange} value={aluno.nota3} size='small' id="nota3" label="Nota 3" variant="outlined" sx={{ width: '95%'}}/>
            <TextField onChange={handleChange} value={aluno.nota4} size='small' id="nota4" label="Nota 4" variant="outlined" sx={{ width: '95%'}}/>

          </Stack>

        </Box>

        <Box sx={{ p: '0px', m: '0px', width: '80vw', height: '20vh', backgroundColor: '#008DA9', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

          <Stack sx={{p: '15px', m:0, width: '80%', height: '60%', backgroundColor: '#008DA9', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'start', gap: '15px'}}>

            <Button sx={{backgroundColor: 'white', color: 'green', fontSize: '20px', '&:hover': {backgroundColor: '#f5f5f5'}}} onClick={salvarDados}>Salvar dados</Button>
            <Button sx={{backgroundColor: 'white', color: 'red', fontSize: '20px'}} onClick={limparDados}>Limpar dados</Button>

          </Stack>
        </Box>

      </Box>

    </div>
  )
}

export default App
