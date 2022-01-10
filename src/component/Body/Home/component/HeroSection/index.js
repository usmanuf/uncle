import React from 'react';
import './style.css'
import Carousel from "./Carousel";
import Form from './Form'
import useStyles from './Style';

const HeroSection = () =>{
    const classes = useStyles();
    return(

        <div className={"MainHerosection"}>

            <div className={classes.HeroSection}>
                <div className={'HeroSections'}>

            <div container className={"row  container "}>

                <div className={"col-sm-12 col-md-6"}>
<Carousel/>
                </div>
                <div className={"col-sm-12 col-md-6"}>
<Form/>
                </div>

            </div>
            </div>
            </div>
        </div>
    )
}
export default HeroSection;
