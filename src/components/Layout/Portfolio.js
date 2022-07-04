import classes from "./Portfolio.module.css";

import logo1 from "../../assets/portfolio-logo/logo-1.png";
import logo2 from "../../assets/portfolio-logo/logo-2.png";
import logo3 from "../../assets/portfolio-logo/logo-3.png";
import logo4 from "../../assets/portfolio-logo/logo-4.png";
import logo5 from "../../assets/portfolio-logo/logo-5.png";
import logo6 from "../../assets/portfolio-logo/logo-6.png";
import logo7 from "../../assets/portfolio-logo/logo-7.png";
import logo8 from "../../assets/portfolio-logo/logo-8.png";
import logo9 from "../../assets/portfolio-logo/logo-9.png";
import logo10 from "../../assets/portfolio-logo/logo-10.png";
import logo11 from "../../assets/portfolio-logo/logo-11.png";
import logo12 from "../../assets/portfolio-logo/logo-12.png";
import logo13 from "../../assets/portfolio-logo/logo-13.png";
import logo14 from "../../assets/portfolio-logo/logo-14.png";
import logo15 from "../../assets/portfolio-logo/logo-15.png";
import logo16 from "../../assets/portfolio-logo/logo-16.png";

import PortfolioImage from "./PortfolioImage";

const Portfolio = () => {
  const images = [
    { src: logo1, order:1 },{ src: logo2, order:2 },{ src: logo3, order:3  },{ src: logo4, order:4 },
    { src: logo5, order:4 },{ src: logo6, order:3 },{ src: logo7, order:2  },{ src: logo8, order:1 },
    { src: logo9, order:1},{ src: logo10, order:2 },{ src: logo11, order:3  },{ src: logo12, order:4 },
    { src: logo13, order:4 },{ src: logo14, order:3},{ src: logo15, order:2  },{ src: logo16, order:1 },
  ];

  return (
    <>
      <section className={`${classes.BannerImage}`}>
        <div className={classes.portfolioText}>
          <h6>Our Portfolio</h6>
          <h2>Our Portfolio</h2>
        </div>
        <div className="container-md">
          <div className={`${classes["logo-folio"]}`}>
            {
                
                images.map((img)=>
                    img.order%2!==0 ? (<PortfolioImage imageSrc={img.src} className ={`${classes["folio-wrap"]}  ${"px-auto"}` } order={img.order}/>) :
                    (<PortfolioImage imageSrc={img.src} className ={`${classes["folio-wrap"]} ${"px-auto"}  ${classes["grey"]} `} order={img.order}/>)
                    
                )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
