import { Routes, Route, HashRouter  } from "react-router-dom"
import SaveTheDate from './pages/SaveTheDate'
import Location from './pages/Location'
import Geschenke from "./pages/Geschenke"
import Zeitplan from "./pages/zeitplan"
import Uebernachtung from "./pages/Uebernachtung"
import './App.css'


// Save the date
// Location & Anfahrt
// Zeitplan der Hochzeit
// Übernachtungsoptionen

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<SaveTheDate />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/zeitplan" element={<Zeitplan />} />
        <Route exact path="/uebernachtung" element={<Uebernachtung />} />
        <Route exact path="/geschenke" element={<Geschenke />} />
      </Routes>
    </HashRouter>
  )
}

export default App
