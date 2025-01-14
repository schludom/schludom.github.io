import Navbar from "../components/navbar/Navbar"
import "./Location.css"

const Location = () => {


  return (
    <>
      <Navbar />
      <div className="location-container">
      <img
        className="location-image"
        src="https://dam.destination.one/2056912/64fdb3794a5d3b9f38881e46f2448c484356d3d1e6112bdd16231a8ceba2d9bf/detmold-2023-026-lwl-freilichtmuseum-teutoburger-wald-tourismus-d-ketz-jpg.jpg"
      />
      <p>
      Das LWL-Freilichtmuseum Detmold bietet eine malerische Kulisse, umgeben von historischen Gebäuden und weitläufigen Gärten. 
      Die idyllische Atmosphäre und die authentische Darstellung der westfälischen Kultur schaffen einen einzigartigen Rahmen für eine romantische Zeremonie. 
      Zudem bieten die verschiedenen historischen Gebäude und Landschaften zahlreiche Möglichkeiten für wunderschöne Erinnerungsfotos.
      </p>
      </div>
    </>
  )
}

export default Location