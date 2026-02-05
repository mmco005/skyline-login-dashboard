import { useState } from 'react';
import LoginForm from './components/loginform';
import Dashboard from './components/dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = (name) => {
    setUser(name);
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? <Dashboard username={user} /> : <LoginForm onLogin={handleLogin} />}
    </>
  );
}

export default App;