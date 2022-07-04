import { Link } from "react-router-dom";

import logo from "../../assets/Logo.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";

import classes from "./Footer.module.css";


const Footer = () => {
  return (
    <>
      <section className={classes.Footer}>
        <div className="container-lg py-4 px-4">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className={classes["brandlo-footer-img"]}>
                <img src={logo} alt="logo" />
                <p>
                  A creative, technical, full service, website designing and
                  development agency, building beautiful, attractive and
                  affordable masterpiece for small and large businesses.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={classes["brandlo-footer-heading"]}>
                <h2>Services</h2>
                <div>
                  <Link to="/" className={classes.link}>
                    About
                  </Link>
                </div>
                <div>
                  <Link to="/" className={classes.link}>
                    2D Video Animation
                  </Link>
                </div>
                <div>
                  <Link to="/" className={classes.link}>
                    3D Video Animation
                  </Link>
                </div>
                <div>
                  <Link to="/" className={classes.link}>
                    Packages
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={classes["brandlo-footer-heading"]}>
                <h2>About</h2>
                <p>+1-(855)-441-4824</p>
                <p>
                  <div>Address:</div> 3403 West T C Jester Blvd #446 Houston, TX
                  77018
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={classes["brandlo-footer-heading"]}>
                <h2>Follow Us</h2>
                <div>
                  <Link to="/" className={classes.link}>
                    Facebook
                  </Link>
                </div>
                <div>
                  <Link to="/" className={classes.link}>
                    Twitter
                  </Link>
                </div>
                <div>
                  <Link to="/" className={classes.link}>
                    Linkedin
                  </Link>
                </div>
                <div>
                  <Link to="/" className={classes.link}>
                    Instagram
                  </Link>
                </div>
                <div>
                  <Link to="/" className={classes.link}>
                    Youtube
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 mx-auto">
                <div className={classes.brandImage}>
                    <div><img src={brand1} alt=""/></div>
                    <div><img src={brand2} alt=""/></div>
                    <div><img src={brand3} alt=""/></div>
                    <div><img src={brand4} alt=""/></div>
                    <div><img src={brand5} alt=""/></div>
                </div>
                    
            </div>

          </div>
        </div>
      </section>
      <div className={classes["footer-line"]}>
        <div className={`${"container-lg"} `}>
          <div className={`${"row pt-4 px-2"} `}>
            <div className="col-sm-5">
              <p>© Super Brandlo 2022. All rights reserved.</p>
            </div>
            <div className="col-sm-2">
              <p>Privacy Policy</p>
            </div>
            <div className="col-sm-2">
              <p>Terms &amp; Conditions.</p>
            </div>
            <div className="col-sm-3">
              <p>By Web Design Gator.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
