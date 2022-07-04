import classes from "./Portfolio.module.css";

const PortfolioBanner = (props) => {
  return (
    <>
      <section className={`${classes.BgImage} `}>
        <div className="container-md">
          <div className="row ">
            <div
              className={`${"col-md-6  d-flex align-content-center"} ${
                classes.text
              }`}
            >
              <div className="text-center text-lg-start my-auto ">
                <h2 className="display-lg-5">{props.title}</h2>

                <p className="mt-2">{props.description}</p>
              </div>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioBanner;
