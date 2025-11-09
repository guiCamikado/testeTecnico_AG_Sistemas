import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

// WIP
import DefaultBackground from './components/atoms/DefaultBackground'
import LoginPage from './components/pages/LoginPage'
import RegistroPage from './components/pages/RegistroPage'
import TermosDeUsoPage from './components/pages/TermosDeUsoPage'
import DashboardPage from './components/pages/DashboardPage'
import IntentionsPage from './components/pages/IntentionsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DefaultBackground>
      <BrowserRouter>
        <Routes>
          {/* Login e Registro */}
          <Route path="/" element={<LoginPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/registro" element={<RegistroPage />}/>
          <Route path='/termosDeUso' element={<TermosDeUsoPage />}/>

          {/* Quando conectado */}
          <Route path='/dashboard' element={<DashboardPage />}/>
          <Route path='/intentions' element={<IntentionsPage />}/>
        </Routes>
      </BrowserRouter>

    </DefaultBackground>
    </>
  )
}

export default App
