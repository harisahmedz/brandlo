import classes from './Portfolio.module.css'


const PortfolioImage = (props)=>{
  const listitem = (props.order === 2  || props.order === 3) ? `${" col-xl-4 col-lg-2 col-md-4 col-sm-6 " } ${classes.width}` : `${"col-lg-2 col-xl-2 col-md-4 col-sm-6"}`;

    return (
        <li className={`${listitem} ${"pe-1 pb-1"}`}>
        <div className={props.className}>
          <img src={props.imageSrc} alt="" />
        </div>
      </li>
    );
}

export default PortfolioImage;