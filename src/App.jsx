import { useState } from 'react'
import { Routes, Route, HashRouter  } from "react-router-dom"
import Subpage from './pages/Subpage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
    <Routes>
      <Route exact path="/home" element={<Subpage />} />
    </Routes>
    </HashRouter>
  )
}

export default App
