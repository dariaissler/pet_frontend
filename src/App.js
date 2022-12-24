import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { useRoutes } from './routes'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'

function App() {
  const { login, logout, token, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(false)
  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated
    }}>
      <Router>
          <Header />
        <div style={{width: "90%", margin: "0 auto"}}>
          {routes}
        </div>
        <Footer />
      </Router>
    </AuthContext.Provider>
  )
}

export default App
