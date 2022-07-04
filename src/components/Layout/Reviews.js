import classes from "./Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import bbgClub from "../../assets/testimonial-logo1.png";
import cocaCabin from '../../assets/testimonial-logo2.png';
import greenWood from '../../assets/testimonial-logo3.png';

const Reviews = () => {
  const clientsReviewData = [
    {
      id: "1",
      title: "Our Happy Clients",
      name: "Mike Anderson Jame",
      imgSrc: bbgClub,
      description:
        "Extremely worth the time and effort. A great one-stop platform you must use to source top-tier logo designs for your enterprise. Highly recommended their logo design service.",
    },
    {
      id: "2",
      title: "Our Happy Clients",
      name: "Mike Anderson Jame",
      imgSrc: cocaCabin,
      description:
        "Extremely worth the time and effort. A great one-stop platform you must use to source top-tier logo designs for your enterprise. Highly recommended their logo design service.",
    },
    {
      id: "3",
      title: "Our Happy Clients",
      name: "Mike Anderson Jame",
      imgSrc: greenWood,
      description:
        "Extremely worth the time and effort. A great one-stop platform you must use to source top-tier logo designs for your enterprise. Highly recommended their logo design service.",
    },
  ];
  return (
    <section className={`${classes.BannerImage}`}>
      <div className="container-md">
        <div className={classes["review-section-text"]}>
          <h2>
            See why millions of people around the world choose to design their
            logo with BrandName
          </h2>
          <p>
            Millions of businesses in the world trust the DeltaLogoDesigns logo
            creator. No need to hire an expensive graphic designer. Create your
            logo on your own.
          </p>
          <div className={classes.phoneNumber}>19 572 787</div>
          <p>
            entrepreneurs like yourself have already created their logo with
            DeltaLogoDesigns since its launch. 11 new logos are created every
            minute.
          </p>
          <button type="submit" className={classes.SubmitButton}>
            Get in Touch
          </button>
        </div>
        <div className={classes.ClientsSection}>
          <h6>Our Happy Clients</h6>
          <h2>What are our clients saying about us?</h2>
          <div className="row d-flex justify-content-center align-items-center y-0 mx-0">
            {clientsReviewData.map((data) => (
              <div className="col-md-6 col-lg-4 pt-4 col-sm-6">
                <div className={classes["testimonial-wrap"]}>
                  <img src={data.imgSrc} alt="" />
                  <div className={classes["test-text"]}>
                    <h6>{data.title}</h6>
                    <h5>{data.name}</h5>
                  </div>
                  <div className={classes.stars}>
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className={classes.iconStyle}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className={classes.iconStyle}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className={classes.iconStyle}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className={classes.iconStyle}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className={classes.iconStyle}
                      />
                    </div>
                  </div>
                  <p>
                    {data.description}
                  </p>
                  <h5 style={{fontWeight:"600"}}>BBQ CLUB</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
