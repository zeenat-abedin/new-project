import Reac, {useState} from 'react'
import { TextField, Button, Container, Box, Typography, Alert, Card, CardContent, Grid } from '@mui/material'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        if (email === 'test@test.com' && password === '12345678') {
            setSuccessMessage('login successful')
            setError('')
        } else {
            setError('incorrect credentials')
            setSuccessMessage('')

        }
    }
  return (
      <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
              <Card elevation={3} style={{padding: '20px', width: '400px'}}>
                  <CardContent>
                      <Typography variant='h4' component='h1' gutterBottom>Login</Typography>
                      
                      <form onSubmit={handleSubmit}>
                          <Grid container spacing={2}>
                              <Grid item xs={12}>  <TextField id="email" label="Email" variant="outlined" margin="normal" value={email} onChange={e => setEmail(e.target.value)} fullWidth /></Grid>
                              <Grid item xs={12}>       <TextField id="password" label="Password" type='password' variant="outlined" margin="normal" value={password} onChange={e => setPassword(e.target.value)} fullWidth /></Grid>
                              <Grid item xs={12}> 
                  <Button type='submit' variant='contained' color='primary'>Login</Button>
                                  
                                  </Grid>

                                <Grid item xs={12}> 
                            {error ? <Alert severity='error' style={{marginBottom: '10px'}}> {error}</Alert> : null}
                          </Grid> 

                             <Grid item xs={12}> 
                               
                          {successMessage ? <Alert severity='success'> {successMessage}</Alert> : null}
                               </Grid> 
                          </Grid>
                
           
                          

                      </form>
                    
                </CardContent>
              </Card>


         
   


          </Box>
    </Container>
  )
}

export default Login