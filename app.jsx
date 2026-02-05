import { useState } from 'react';
import LoginForm from './components/loginform';
import Dashboard from './components/dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  // Function to handle login success
  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      {/* Conditional Logic: isLoggedIn? <Dashboard /> : <LoginForm /> */}
      {isLoggedIn ? (
        <Dashboard username={user} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;