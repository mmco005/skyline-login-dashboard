import React, { useState } from 'react'
import LoginForm from './LoginForm.jsx'
import Dashboard from './Dashboard.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = ({ username, password }) => {
    // Mock authentication
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true)
      setError("")
    } else {
      setError(`Invalid credentials for ${username}`)
    }
  }

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LoginForm onLogin={handleLogin} error={error} />
      )}
    </div>
  )
}

export default App
