import React, { useState } from 'react';
import axios from 'axios';
import "./accountRegister.css";
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const AccountRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password_hash: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/accounts/', formData);
        if (response.status === 201) {
            alert("Account created successfully");
            setFormData({
              username: '',
              email: '',
              password_hash: '',
            });
            console.log('Account created successfully');
            console.log('New account data:', response.data);
        }
    } catch (error) {
        console.error('Error creating account:', error);
    }
};

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>

        <Grid container spacing={2}>
          {/* Username */}
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          {/* Password */}
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              name="password_hash"
              id="password_hash"
              value={formData.password_hash}
              onChange={handleChange}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Register
            </Button>
          </Grid>
        </Grid>

      </form>
    </Container>
  );
};

export default AccountRegister;
