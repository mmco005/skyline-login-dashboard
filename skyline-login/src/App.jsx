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
    <div>
      {/* Kapag isLoggedIn ay true, lilitaw ang Dashboard */}
      {isLoggedIn ? <Dashboard username={user} /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}

export default App;