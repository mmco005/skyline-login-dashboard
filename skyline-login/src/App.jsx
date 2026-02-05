import { useState } from 'react';
import LoginForm from './components/loginform'; // Siguraduhin na 'components' ay nasa loob din ng 'src'
import Dashboard from './components/dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = (name) => {
    setUser(name);
    setIsLoggedIn(true);
  };

  return (
    // Ito yung magsisilbing "wrapper" na i-ce-center natin sa index.css
    <div className="app-container">
      {isLoggedIn ? (
        <Dashboard username={user} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;