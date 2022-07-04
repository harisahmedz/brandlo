import React from "react";

import PagesHeader from "../components/Layout/PagesHeader";
import Portfolio1 from "../components/Layout/Portfolio";
import BottomLine from "../components/Header/BottomLine";
import PortfolioBanner from "../components/Layout/PortfolioBanner";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Layout/Contact";
import OurTech from "../components/Layout/OurTech";
import Prices from "../components/Layout/Prices";

const Portfolio = () => {
  return (
    <>
      <PagesHeader title="Portfolio" />
      <BottomLine />
      <PortfolioBanner
        title="Every brand has a story to tell"
        description="story to tell Each client comes to Delta Logo Designs with their own set of unique goals, requirements, and challenges. The projects below are great examples of what our team can accomplish by working together creatively, fueled by our passion.
     "
      />
      <Portfolio1 />

      <OurTech />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
};
export default Portfolio;
