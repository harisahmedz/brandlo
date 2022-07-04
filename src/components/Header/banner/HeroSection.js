
import ContactForm from './ContactForm';
import classes from './HeroSection.module.css';


const HeroSection =()=>{
    return (
        <>
        <section className={`${classes.BannerImage} `}>
            <ContactForm/>
        </section>
        </>

    )
}

export default HeroSection;