import "./Homepage.css"

const Homepage = () => {

  return (
    <div className="announcement-container">
      <div className="announcement">
        <h1 className="fade-in">We're Getting Married!</h1>
        <h2 className="slide-in">John Doe & Jane Smith</h2>
        <p className="fade-in">We are thrilled to announce our wedding on</p>
        <h3 className="slide-in">June 15, 2025</h3>
        <p className="fade-in">at the beautiful</p>
        <h3 className="slide-in">Sunset Beach Resort, Malibu, CA</h3>
        <div className="details">
          <p className="fade-in">Join us for a celebration of love, laughter, and happily ever after.</p>
          <p className="fade-in">Reception to follow the ceremony.</p>
          <p className="fade-in">Dress code: Beach formal</p>
        </div>
        <div className="rsvp">
          <button className="rsvp-button">RSVP</button>
        </div>
      </div>
    </div>
  );
};


export default Homepage