import Navbar from "../components/navbar/Navbar"
import "./Geschenke.css"

const Geschenke = () => {


  return (
    <>
      <Navbar />
      <div className="geschenke-container">
      <img
        className="geschenke-image"
        src="https://www.eternityrose.com/skin/frontend/base/default/eternityrose/wedding-gift-us/images/wedding-gift-etiquette-group-gift.jpg"
      />
      <p>
      Natürlich seid ihr als Gäste unser größtes Geschenk! 
      Möchtet ihr uns aber dennoch etwas schenken, findet ihr hier unsere Geschenkeliste.
      </p>
      </div>
    </>
  )
}

export default Geschenke