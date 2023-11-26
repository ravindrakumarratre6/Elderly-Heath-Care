// Signup.js
import React, { useState } from 'react';
import '../CSS/Auth.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    // Add logic for signup (e.g., send data to a server)
    console.log('Signup form submitted:', formData);
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit" style={styles.button}>Signup</button>
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
export default SignUp;