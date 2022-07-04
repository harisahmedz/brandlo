import classes from './Subscribe.module.css';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Subscribe = ()=>{
    return(
        <section className={`${classes.BannerImage} `}>
            <div className={classes.title}>

            <h2>Subscribe Now</h2>
            </div>
            <div className='container pt-5'>
                <div className='row pt-5'>
                    <div className='col-md-3'>
                        <Form.Control className={classes.formControl} type="name" placeholder="Name" />
                    </div>
                    <div className='col-md-3'>
                        <Form.Control className={classes.formControl} type="email" placeholder="Email" />
                    </div>
                    <div className='col-md-3'>
                        <Form.Control className={classes.formControl} type="number" placeholder="Number" />
                    </div>
                    <div className='col-md-3'>
                        <Button variant="" type="submit" className ={classes.SubmitButton} >
                            Subscribe Now
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Subscribe;