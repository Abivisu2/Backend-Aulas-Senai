import { useState } from 'react'
import { Box, Stack, TextField, Typography } from '@mui/material';







function App() {


  return (
    <>
      <Box sx={{ p: '0', m: '0', width: '100vw', height: '100vh', backgroundColor: 'blue', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }}>

        <Box sx={{ width: '80%', height: '20%', bgcolor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Stack sx={{ width: '60%', height: '60%', backgroundColor: 'white', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>

            <Typography variant="h1" component="h2" sx={{ color: 'black', display: 'flex', justifyContent: 'center' }}>
              Cadastro de notas
            </Typography>

          </Stack>

        </Box>

        <Box sx={{ p: '0', m: '0', width: '80%', height: '80%', backgroundColor: 'cyan' }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        </Box>

      </Box>

    </>
  )
}

export default App
