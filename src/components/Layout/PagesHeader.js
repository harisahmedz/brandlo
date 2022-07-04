import classes from './PagesHeader.module.css'

const PagesHeader = (props)=>{
    return (<>

    <section className={classes.bgImage}>
        <h2>{props.title}</h2>
    </section>
    </>)
}

export default PagesHeader;