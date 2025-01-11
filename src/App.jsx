import { useState } from 'react'
import { Routes, Route, HashRouter  } from "react-router-dom"
import Homepage from './pages/Homepage'
import Subpage from './pages/Subpage'
import './App.css'

function App() {

  return (
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/home" element={<Subpage />} />
    </Routes>
    </HashRouter>
  )
}

export default App
