
import classes from './Header.module.css'

const BottomLine = ()=>{
    return (
        <section className={`${"py-5"} ${classes.headline}`}>
        <div className="container">
          <div className="text-center">
            <h2 className="display-lg-5">Our Award-Winning Logo Design Portfolio</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 text-center col-lg-8">
              <p className="mt-2">
              Sturdy Logo has been serving small and medium-sized businesses for more than 8 years now.  Our Portfolio encompasses logo designs for more than 40 industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    )

}

export default BottomLine;