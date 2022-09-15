import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={`${classes.align} wrapper`}>
      <div className="media">
        <div className="media__image">
          <i className="icon icon--primary fa-light fa-phone-volume"></i>
        </div>
        <div className="media__body">
          <div className="media__title">07964 991445</div>
        </div>
      </div>
      <div className="media">
        <div className="media__image">
          <i className="icon icon--primary fa-light fa-envelope"></i>
        </div>
        <div className="media__body">
          <div className="media__title">EMAIL</div>
        </div>
      </div>
      <div className="media">
        <div className="media__image">
          <i className="icon icon--primary fa-light fa-location-dot"></i>
        </div>
        <div className="media__body">
          <div className="media__title">
            <p>Office 9, Unit 2</p>
            <p>Moreland’s Trading Estate</p>
            <p>Bristol Road</p>
            <p>GL1 5RZ</p>
          </div>
        </div>
      </div>

      <div className={classes.map}>
        <iframe
          title="map"
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Em%20Stuart%20Injuries&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
   
        ></iframe>
      </div>
    </div>
  );
};
export default ContactInfo;
