import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onLogin(username);
  };

  return (
    <div style={{
      padding: '40px', 
      background: 'white', 
      borderRadius: '20px', 
      boxShadow: '0 10px 25px rgba(221, 160, 221, 0.3)', // Light purple shadow
      textAlign: 'center',
      width: '350px',
      border: '2px solid #f8bbd0' // Light pink border
    }}>
      <h2 style={{ color: '#8e44ad', marginBottom: '10px' }}>SkyLine Login</h2>
      <p style={{ color: '#ad1457', fontSize: '14px', marginBottom: '20px' }}>Welcome back, Gorgeous!</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          style={{ 
            padding: '12px', 
            width: '100%', 
            marginBottom: '20px', 
            borderRadius: '10px', 
            border: '1px solid #f48fb1',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        />
        <button type="submit" style={{ 
          padding: '12px', 
          backgroundColor: '#ce93d8', // Light Purple
          color: 'white', 
          border: 'none', 
          borderRadius: '10px', 
          cursor: 'pointer', 
          width: '100%',
          fontWeight: 'bold',
          transition: '0.3s'
        }}>
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;