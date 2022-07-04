import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Container
      fluid="md"
      className={`${"justify-content-sm-center align-items-sm-center"} ${classes.contactForm}`}
    >
      <Row className="justify-content-sm-center">
        <Col md={12} lg="5" className="text-center text-lg-start ">
          <h1 >
            Beautiful luxury{" "}
            <span style={{ display: "block" }}> logo design in $20</span>
          </h1>
            <p  className={`${'mx-md-auto mx-lg-0'}`}>Get Your Custom Logo Designed by World's #1 Design Agency</p>
          <div className={classes.Formwidth}>
          <div className={`${'mx-md-auto mx-lg-0'} ${classes.FormWrapper}`}>
            <h2>Activate Your Coupon</h2>
            <Form className="justify-content-sm-center">
                <Form.Control className={classes.formControl} type="name" placeholder="Name" />
                <Form.Control className={classes.formControl} type="email" placeholder="Email" />
                <Form.Control className={classes.formControl} type="password" placeholder="Password" />
                <Form.Control className={classes.textareaFormControl} as="textarea" rows={2}  placeholder="Message" />

              <Button variant="" type="submit" className ={classes.SubmitButton} >
                Avail Discount
              </Button>

            </Form>
            </div>
          </div>
        </Col>
        <Col xs={7}></Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
