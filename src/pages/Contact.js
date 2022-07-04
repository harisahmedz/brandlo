import React from "react";

import PagesHeader from "../components/Layout/PagesHeader";
import PortfolioBanner from "../components/Layout/PortfolioBanner";
import BottomLine from "../components/Header/BottomLine";
import ContactPage from '../components/Layout/Contact';
import Experience from '../components/Layout/Experience';
import OurTech from "../components/Layout/OurTech";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <PagesHeader title="Contact Us" />
      <BottomLine />
      <PortfolioBanner
        title="We’d love to chat!"
        description="We’d love to chat! Want to know more about our services? Want to gain a deeper understanding of our process? Already know we’re a perfect match?"
      />
      <ContactPage/>
      <Experience/>
      <OurTech/>
      <Footer/>
    </div>
  );
};
export default Contact;
