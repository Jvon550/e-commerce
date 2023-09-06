import React, { useState } from 'react';
import axios from 'axios';

import "./accountRegister.css";

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
            console.log('Account created successfully');
            console.log('New account data:', response.data);
        }
    } catch (error) {
        console.error('Error creating account:', error);
    }
};

  return (
    <div className="registration-form">

      <h2 className='form-title'>Register</h2>

      <form onSubmit={handleSubmit}>

        <div className='input-container'>
          <label htmlFor="username">username</label>
          <input placeholder='username' 
          type="text" 
          name="username" 
          id="username" 
          value={formData.username} 
          onChange={handleChange}/>
        </div>

        <div className="input-container">
          <label htmlFor="">email</label>
          <input placeholder='email' 
          type="email" name="email" 
          id="email" 
          value={formData.email} 
          onChange={handleChange}/>
        </div>

        <div className="input-container">
          <label htmlFor="">password</label>
          <input placeholder='password' 
          type="password" 
          name="password_hash" 
          id="password_hash" 
          value={formData.password_hash} 
          onChange={handleChange}/>
        </div>

        <div className="input-container">
          <button type="submit" className='register-button'>register</button>
        </div>

      </form>
    </div>
  );
};

export default AccountRegister;
