import classes from "./Prices.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Services = (props)=>{
    const titleBgColor = props.data.style ? {background:"#636363", border:"none", color:"#fff", textShadow:"none", fontWeight:"500", paddingTop:"2px" } : {};
    const borderColor = (props.data.style) ? {border:"1px solid #636363"} : {};
    return (
        <div className="col-md-6 col-xl-4 col-lg-6 col-sm-8">
        <div className={classes["package-wrap"]} style={borderColor}>
          <div className={classes["package-btn"]} style={titleBgColor}>{props.data.title}</div>
          <div className={classes["package-text"]}>
            <h2>${props.data.price}</h2>
            <h5>{`${props.data.orgPrice} ${props.data.dicountPercent}% Off`}</h5>
          </div>
          <ul className={classes["package-list"]}>
            {props.data.list.map((point)=>(
                <li>
                <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                className={classes.iconStyle}
                />
                {point}
            </li>
            ))}

           
          </ul>
          <div className={`${"row py-2 mx-2"} ${classes.buttonWrapper}`}>
            <div className={"col-6"}>
              <button className={classes["package-btn2"]}>
                Order Now
              </button>
            </div>
            <div className="col-6">
              <button className={` ${classes.transparent}`}>
                Book a Call
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6 px-0">
              <div className={`${classes["package-info2"]} ${classes.borderRight}`}>
                <p>Share Your Data</p>
                <h6>+1-888-667-0970</h6>
              </div>
            </div>
            <div className="col-6 px-0">
              {" "}
              <div className={classes["package-info2"]}>
                <p>Wants to Discuss?</p>
                <h6>Live Chat Now</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Services;