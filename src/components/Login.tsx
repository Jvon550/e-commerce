import React, { useState } from 'react';
import './login.css'

interface FormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const handleChange = (e: React.FormEvent<HTMLFormElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // You can add your login logic here, such as sending the data to a server.
        console.log(formData);
    };

  return (
    <div className="login-container">
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="text">email</label>
                <input
                placeholder='email'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input
                placeholder='password'
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}


export default Login;