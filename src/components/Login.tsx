import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  // Define state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get the signIn function from react-auth-kit
  const signIn = useSignIn();

  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send a POST request to the login endpoint with email and password
      const response = await axios.post('http://localhost:3000/accounts/login', {
        email,
        password,
      });

      // Check if the response contains an error property and handle it if needed.
      if (response.data.error) {
        console.error('Authentication error:', response.data.error);
        // Handle the error case (e.g., show an error message).
      } else {
        // Authentication was successful.
        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: { email },
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      // Handle the error case (e.g., show an error message).
    }
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
          onChange={handleEmailChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          required
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
  );
};

export default Login;
