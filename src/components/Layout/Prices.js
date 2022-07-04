import classes from "./Prices.module.css";
import Services from "./Services";

const Prices = () => {
    const servicesData = [
    {
        id:'1',title: "Logo Basic",price: "29",orgPrice:"96",dicountPercent: "70",
        list:[
            "2 Original Logo Concepts", "2 Dedicated Logo Designer","2 Revisions",
            "With Grey Scale Forma","Free Icon Design","Formats: JPEG Only",
            "24 - 48 Hours Turn Around Time",
        ],
        style :true,
    },
    {
        id:'2',title: "Logo Basic",price: "29",orgPrice:"96",dicountPercent: "70",
        list:[
            "2 Original Logo Concepts", "2 Dedicated Logo Designer","2 Revisions",
            "With Grey Scale Forma","Free Icon Design","Formats: JPEG Only",
            "24 - 48 Hours Turn Around Time",
        ]
    },
    {
        id:'3',title: "Logo Basic",price: "29",orgPrice:"96",dicountPercent: "70",
        list:[
            "2 Original Logo Concepts", "2 Dedicated Logo Designer","2 Revisions",
            "With Grey Scale Forma","Free Icon Design","Formats: JPEG Only",
            "24 - 48 Hours Turn Around Time",
        ],
        style :true,
    },
    {
        id:'4',title: "Logo Basic",price: "29",orgPrice:"96",dicountPercent: "70",
        list:[
            "2 Original Logo Concepts", "2 Dedicated Logo Designer","2 Revisions",
            "With Grey Scale Forma","Free Icon Design","Formats: JPEG Only",
            "24 - 48 Hours Turn Around Time",
        ],
        style :true,
    },
    {
        id:'5',title: "Logo Basic",price: "29",orgPrice:"96",dicountPercent: "70",
        list:[
            "2 Original Logo Concepts", "2 Dedicated Logo Designer","2 Revisions",
            "With Grey Scale Forma","Free Icon Design","Formats: JPEG Only",
            "24 - 48 Hours Turn Around Time",
        ],
        style :true,
    },
    {
        id:'6',title: "Logo Basic",price: "29",orgPrice:"96",dicountPercent: "70",
        list:[
            "2 Original Logo Concepts", "2 Dedicated Logo Designer","2 Revisions",
            "With Grey Scale Forma","Free Icon Design","Formats: JPEG Only",
            "24 - 48 Hours Turn Around Time",
        ],
        style :true,
    },
    
];
        
    
  return (
    <>
      <section className={classes.BannerImage}>
        <div className={classes.serviceText}>
          <h6>Our Services</h6>
          <h2>Our Sercies</h2>
        </div>
        <div className="container-md">
          <div className="row justify-content-center px-3">
                {                
                servicesData.map((service)=>(
                    <Services  data={service} key={service.id}/>
                ))
                }
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
