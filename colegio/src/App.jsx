import { useState } from 'react'
import { CardContent, Stack } from '@mui/material';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';

function App() {

  const [nome, setNome] = useState("")
  const [matricula, setMatricula] = useState("")
  const [status, setStatus] = useState("")
  const [nota1, setNota1] = useState(0)
  const [nota2, setNota2] = useState(0)
  const [nota3, setNota3] = useState(0)
  const [nota4, setNota4] = useState(0)



  return (
    <>
      <Box sx={{p:0, m:0, display: 'flex', backgroundColor: 'white', width: '100%', height: ''}}>

      </Box>

      <Stack spacing={2}>

        <Card>
          <CardContent>
            <Item>Item 1</Item>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Item>Item 2</Item>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Item>Item 3</Item>
          </CardContent>
        </Card>


      </Stack>

    </>
  )
}

export default App
