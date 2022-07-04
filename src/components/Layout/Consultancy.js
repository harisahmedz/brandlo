import classes from "./Consultancy.module.css";

import phoneImage from '../../assets/phone.png';
import mailImage from '../../assets/mail.png';

const Consultancy = () => {
  return (
    <section className={`${"py-5"} ${classes.headline}`}>
      <div className="container-md">
        <div className="text-center">
          <h2 className="display-lg-5">Get Free Consultancy</h2>
          <div className={classes.ConButton}>
            <p>+1-(855) 441-4824</p>
            <p>info@deltalogodesigns.com</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className={`${"col-md-10 text-center col-lg-8 position-relative d-flex justify-content-between"}`}>
          <div className={classes.consultantInfo}>
                <img src={phoneImage} alt=""/>
        </div>
            <div className={classes.buttonPosition}>
              <button type="submit" className={classes.SubmitButton}>
                Get Started
              </button>
            </div>
            <div className={classes.consultantInfo}>
                <img src={mailImage} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
