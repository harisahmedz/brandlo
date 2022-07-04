import React from 'react';

import PagesHeader from "../components/Layout/PagesHeader";
import BottomLine from "../components/Header/BottomLine";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Layout/Contact";
import OurTech from "../components/Layout/OurTech";
import PortfolioBanner from "../components/Layout/PortfolioBanner";
import Experience from '../components/Layout/Experience';
import AboutUs from '../components/Layout/AboutUs';

const About = ()=>{
    return(
        <>
        <PagesHeader title="About Us"/>
        <BottomLine/>
        <PortfolioBanner
        title="We are Brandlo Logo Designs"
        description="Whether starting a new business or revamping an established one, we will make your full scope of digital dreams a reality. With an extensive range of custom services and carefully curated team of experts, we take your online and offline presence to the next level."
      />
        <AboutUs/>
        <OurTech/>
        <Experience/>
        <Contact/>
        <Footer/>
        </>
    )

}
export default About;