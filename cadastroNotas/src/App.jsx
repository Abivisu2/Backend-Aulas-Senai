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

  return (
    <div>
      <Box sx={{ p: '0', m: '0', width: '100vw', height: '100vh', backgroundColor: 'blue', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }}>

        <Box sx={{ width: '80%', height: '20%', bgcolor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Stack sx={{ width: '60%', height: '60%', backgroundColor: 'white', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <Typography variant="h3" component="h2" sx={{ color: 'black', display: 'flex', justifyContent: 'center' }}> Cadastro de notas </Typography>
          </Stack>

        </Box>

        <Box sx={{ p: '0px', m:0, width: '80%', height: '60%', backgroundColor: 'cyan', display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
          <Stack sx={{ p: '20px', m:0, width: '60%', height: '90%', backgroundColor: 'violet', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center', gap: '5px', overflow: 'auto'}}>

            <TextField id="nomeAluno" label="Nome Completo" variant="outlined" sx={{ width: '40%'}}/>
            <TextField id="matriculaAluno" label="Número de Matrícula " variant="outlined" sx={{ width: '40%'}}/>
            <TextField id="StatusAluno" label="Status do Aluno" variant="outlined" sx={{ width: '40%'}}/>
            <TextField id="Nota1" label="Nota 1" variant="outlined" sx={{ width: '40%'}}/>
            <TextField id="Nota2" label="Nota 2" variant="outlined" sx={{ width: '40%'}}/>
            <TextField id="Nota3" label="Nota 3" variant="outlined" sx={{ width: '40%'}}/>
            <TextField id="Nota4" label="Nota 4" variant="outlined" sx={{ width: '40%'}}/>

          </Stack>

        </Box>

        <Box sx={{ p: '0px', m: '0px', width: '80%', height: '20%', backgroundColor: 'aquamarine', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

          <Stack sx={{p: '15px', m:0, width: '80%', height: '60%', backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>

            <Button sx={{backgroundColor: 'white'}}>Salvar dados</Button>
            <Button sx={{backgroundColor: 'white'}}>Limpar dados</Button>

          </Stack>
        </Box>

      </Box>

    </div>
  )
}

export default App
