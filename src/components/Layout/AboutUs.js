import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <section className={`${classes.BannerImage} `}>
        <div className="container-md">
          <div className="row">
            <div className="col-md-9 offset-md-8 col-lg-7 offset-lg-7 col-xl-7 offset-xl-5 col-xxl-7 offset-xxl-5  ">
              <div className={classes["about-text"]}>
                <h6>About Us</h6>
                <h2>
                  The art of visual communication Creatively impacting the world
                  around us—one good design at a time.
                </h2>
                <p>
                  We are here to design what you need. Our team of professionals
                  will make attractive designs to flourish your business. No
                  matter your business is small or large, we are here to made
                  eye-catchy designs for you.
                </p>
                <p>
                  We are here to design what you need. Our team of professionals
                  will make attractive designs to flourish your business. No
                  matter your business is small or large, we are here to made
                  eye-catchy designs for you.
                </p>
                <p>
                  We are here to design what you need. Our team of professionals
                  will make attractive designs to flourish your business. No
                  matter your business is small or large, we are here to made
                  eye-catchy designs for you.
                </p>
              </div>
              <div className={classes["field-button"]}>
                <button type="submit" className={classes.SubmitButton}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
