import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh 
    
    // Mock Authentication Logic
    if (username === 'admin' && password === 'password123') {
      onLogin(username);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>SkyLine Analytics Login</h2>
      {/* Use Template Literals for dynamic CSS classes  */}
      <input 
        className={error ? 'border-red' : 'border-gray'}
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Login</button>
      {error && <p style={{color: 'red'}}>Invalid Credentials</p>}
    </form>
  );
};

export default LoginForm;