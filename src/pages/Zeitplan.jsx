import Navbar from "../components/navbar/Navbar"
import "./Zeitplan.css"

const Zeitplan = () => {


  return (
    <>
      <Navbar />
      <div className="zeitplan-container">
      <img
        className="zeitplan-image"
        src="https://images.squarespace-cdn.com/content/v1/59de739818b27d9ea21229aa/1573122032714-WWXHAJ87W5V415SBD2S7/ablaufplan-hochzeit.jpg"
      />
      <p>
      Zeitplan
      </p>
      </div>
    </>
  )
}

export default Zeitplan