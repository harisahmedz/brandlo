
import classes from './BookCalender.module.css'


const BookCalender = ()=>{
    return (
        <section className={`${"py-5"} ${classes.headline}`}>
            <div className="container">
            <div className="text-center">
                <h2 className="display-lg-4">Book a call on our Calender</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10 text-center col-lg-8">
                    <button type="submit" className ={classes.SubmitButton}>Get Started</button>
                </div>
            </div>
            </div>
      </section>
    );
}

export default BookCalender;