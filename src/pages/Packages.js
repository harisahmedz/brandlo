import Footer from "../components/Footer/Footer";
import Contact from "../components/Layout/Contact";
import OurTech from "../components/Layout/OurTech";
import PagesHeader from "../components/Layout/PagesHeader";
import Prices from "../components/Layout/Prices";


const Packages = ()=>{
    return (
        <>
        <PagesHeader title="Packages"/>
        <Prices/>
        <OurTech/>
        <Contact/>
        <Footer/>

        </>
    );
}

export default Packages;