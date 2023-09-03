import React, { useState } from 'react';
import './login.css'
export default function login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
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
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
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
