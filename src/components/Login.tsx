import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import {useSignIn} from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = useSignIn()
    const navigate = useNavigate();
  
    const handleSubmit  = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/accounts/login', {email: email, password: password});

        signIn({
            token: response.data.token, 
            expiresIn: 3600,
            tokenType: 'Bearer',
            authState: {email: email},
        })

        navigate('/');
      } catch (error) {
        console.error('Error Authentication:', error);
      }
    };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        style={{ marginTop: '1rem' }}
      >
        Login
      </Button>
    </form>
  </Container>
  )
}


export default Login;