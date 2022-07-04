import classes from './OurTech.module.css';

import brand1 from "../../assets/elevate.png";
import brand2 from "../../assets/WordPress-1.png";
import brand3 from "../../assets/waveform.png";
import brand4 from "../../assets/brooklyn.png";
import brand5 from "../../assets/apple.png";
import brand6 from "../../assets/shopify.png";
import brand7 from "../../assets/aws.png";

const OurTech = ()=>{
    return (
        <section className={`${"py-5"} ${classes.headline}`}>
        <div className="container">
          <div className="text-center">
            <h2 className="display-lg-5">Utilizing Current Technologies</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 text-center col-lg-8">
              <p className="mt-2">
              Our team works with advanced platform solutions to create sleek user-friendly designs that your customers and clients will love.
              </p>
            </div>
            <div className="col-12 mx-auto ">
                <div className={`${classes.brandImage} ${"d-flex justify-content-around px-2"}`}>
                    <div><img src={brand1} alt=""/></div>
                    <div><img src={brand2} alt=""/></div>
                    <div><img src={brand3} alt=""/></div>
                    <div><img src={brand4} alt=""/></div>
                    <div><img src={brand5} alt=""/></div>
                    <div><img src={brand6} alt=""/></div>
                    <div><img src={brand7} alt=""/></div>
                </div>
                    
            </div>
          </div>
        </div>
      </section>
    )
}

export default OurTech;