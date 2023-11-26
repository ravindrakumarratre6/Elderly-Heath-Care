
// Login.js
import React, { useState } from 'react';
import '../CSS/Auth.css';

const Login = () => {
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
    // Add logic for login (e.g., send data to a server)
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};
const styles ={
  button:{
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "4px",
    cursor:" pointer"
  }
}
export default Login;
