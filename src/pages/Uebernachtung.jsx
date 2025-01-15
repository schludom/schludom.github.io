import Navbar from "../components/navbar/Navbar"
import "./Uebernachtung.css"

const Uebernachtung = () => {


  return (
    <>
      <Navbar />
      <div className="uebernachtung-container">
      <img
        className="uebernachtung-image"
        src="https://vierjahreszeiten-iserlohn.de/app/uploads/lwl-freilichtmuseum_hagen_tabakhaus-880x495.webp"
      />
      <p>
      Uebernachtung
      </p>
      </div>
    </>
  )
}

export default Uebernachtung