import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutUs from "../components/Layout/AboutUs";
import BookCalender from "../components/Layout/BookCalender";
import Consultancy from "../components/Layout/Consultancy";
import Contact from "../components/Layout/Contact";
import Portfolio from "../components/Layout/Portfolio";
import Prices from "../components/Layout/Prices";
import Reviews from "../components/Layout/Reviews";
import SecondBanner from "../components/Layout/SecondBanner";
import Subscribe from "../components/Layout/Subscribe";


const Home= ()=>{
    return(
        <>
            <Header/>
            <SecondBanner/>
            <Portfolio/>
            <BookCalender/>
            <Prices/>
            <Consultancy/>
            <Subscribe/>
            <AboutUs/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;