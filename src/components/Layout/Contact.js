import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="container py-5 text-center">
      <div className={classes.contactText}>
        <h6>Get in Touch</h6>
        <h2>Contact Us</h2>
      </div>

      <form>
        <div className="row">
          <div className="col-4 px-1">
            <div className={`${"form-floating mb-3 mt-3"}`}>
              <input
                type="text"
                placeholder="Name"
                className={`${"form-control"} ${classes["form-custom"]}`}
              />
              <label for="name" className={classes.label}>Name</label>
            </div>
          </div>

          <div className="col-4 px-1">
            <div className={`${"form-floating mb-3 mt-3"}`}>
              <input
                type="text"
                placeholder="Email"
                className={`${"form-control"} ${classes["form-custom"]}`}
              />
              <label for="name" className={classes.label}>Email</label>
            </div>
          </div>
          <div className="col-4 px-1">
            <div className={`${"form-floating mb-3 mt-3"}`}>
              <input
                type="text"
                placeholder="Phone"
                className={`${"form-control"} ${classes["form-custom"]}`}
              />
              <label for="name" className={classes.label}>Phone</label>
            </div>
          </div>
          <div className="col-12 px-1">
            <div className={`${"form-floating mb-3 mt-3"}`}>
              <input
                type="text"
                placeholder="Name"
                className={`${"form-control"} ${classes["form-custom"]}`}
              />
              <label for="name" className={classes.label}>Name</label>
            </div>
          </div>
        </div>
        <button type="submit" className={classes.SubmitButton}>
          Get in Touch
        </button>
      </form>
    </div>
  );
};

export default Contact;
