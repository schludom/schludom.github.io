import { Routes, Route, HashRouter  } from "react-router-dom"
import Homepage from './pages/Homepage'
import Location from './pages/Location'
import Geschenke from "./pages/Geschenke"
import './App.css'


// Save the date
// Location & Anfahrt
// Zeitplan der Hochzeit
// Übernachtungsoptionen

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/zeitplan" element={<Location />} />
        <Route exact path="/uebernachtung" element={<Location />} />
        <Route exact path="/geschenke" element={<Geschenke />} />
      </Routes>
    </HashRouter>
  )
}

export default App
