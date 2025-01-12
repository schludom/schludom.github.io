import "./Homepage.css"

const Homepage = () => {

  return (
  <div className="container">
        <img 
        className="background-image"
        src="https://www.gaerten-in-westfalen.de/media/filer_public_thumbnails/filer_public/4f/dd/4fdd9bcb-69f9-4bda-ac17-6b1688579a47/detmold_lwl_freilichtmuseum_detmold_unbekannt_2009_1.jpg__1920x920_q90_crop_subject_location-831%2C554_subsampling-2_upscale.jpg" 
        alt="Wedding Announcement"
        />
    <div className="card">
      <p className="names">Svenja & Dominik </p>
      <p className="text">Der schönste Tag in unserem Leben soll nicht ohne unsere Familien und Freunde vergehen.</p>
      <br/>
        <img 
        className="card-image"
        src="https://www.pngall.com/wp-content/uploads/14/Vine-Tattoo-PNG-Clipart.png"
        />
      <br/>
      <br/>

      <p className="text">4. Juli, 2025</p>
      <p className="text">LWL Freilichtmuseum Detmold</p>
      <br/>
      <br/>
      <p className="text">Weitere Details in Kürze.</p>
    </div>
  </div>
  );
};


export default Homepage