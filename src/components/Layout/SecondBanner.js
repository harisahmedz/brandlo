import classes from "./SecondBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  ResearchIcon,
  BriefIcon,
  DeliverIcon,
  DesignIcon,
} from "../../assets/svgs/svgs-icons";

const SecondBanner = () => {
  return (
    <section className={`${classes.BannerImage} `}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-xl-6 wow fadeInLeft" data-wow-delay="0.5s">
            <div className={classes["women-text"]}>
              <h2>What we design for you?</h2>
              <p>
                We are here to design what you need. Our team of professionals
                will make attractive designs to flourish your business. No
                matter your business is small or large, we are here to made
                eye-catchy designs for you.
              </p>
            </div>
            <ul className={classes["logo-list"]}>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                Monogram logos (or letter marks)
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                Pictorial marks (or logo symbols)
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                Mascots
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                The emblem
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                Illustrative Logos
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                Wordmarks (or logotypes)
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                Abstract logo marks
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                The combination mark
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className={classes.iconStyle}
                />
                3D Logos
              </li>
            </ul>
            <div className="row">
              <div className={`${"col-md-3 col-sm-12 text-right "} ${classes.try}`}>
                <div className={`${"py-4"} ${classes["logo-wrap"]}`}>
                  <BriefIcon />
                  <p>Brief</p>
                </div>
                <div className={`${"py-4"} ${classes["logo-wrap"]}`}>
                  <ResearchIcon />
                  <p>Research</p>
                </div>
              </div>
              <div className="col-md-6 justify-content-center">
                <div className={`${"py-5"} ${classes["logo-wrap-2"]}`}>
                  <DeliverIcon />
                  <p>Deliver</p>
                </div>
              </div>
              <div className={`${"col-md-3 col-sm-12 text-right "} ${classes.try}`}>
                <div className={`${"py-4"} ${classes["logo-wrap"]}`}>
                  <DesignIcon />
                  <p>Design</p>
                </div>
                <div className={`${"py-4"} ${classes["logo-wrap"]}`}>
                  <ResearchIcon/>
                  <p>Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
