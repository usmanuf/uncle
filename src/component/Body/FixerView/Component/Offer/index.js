import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import useStyle from './packagesStyle';
import SinglePackag from "./singlePackage";
import React from "react";
const Index = () => {
    const classes = useStyle();
    return(
        <>

            <Container className = {classes.background1}>
            <div className = {classes.background}>
                <div className={'my-4 headingCenter'}>
                <h1 className={"heading-Title"}>
                    Featured Id Packages
                </h1>
                <div className={"bar"}/>
                </div>
             <div className={"row"}>
                 <div className={'col-lg-4 col-sm-12'}>
                     <SinglePackag
                         price = "RS: 1000"
                         headerTitle = "BASIC"
                         basicContent = 'Note: You can purchase any skill whatever you want in 500 rupees.'
                         classic = {classes.bgBasic}
                         bar={classes.bgBasic}
                         colorBorder={classes.pBasic}
                         btn={classes.bgBasic}
                         textColor={classes.colorBasic}
                     />
                 </div>
                 <div className={'col-lg-4 col-sm-12'}>
                     <SinglePackag
                         price = "RS: 3000"
                         headerTitle = "Standerd"
                         standerdContent1={'1000 Rupees'}
                         standerdContent2={'Get 1 skill'}
                         standerdContent3={'You have the option to purchase one more skill of your choice'}
                         colorBorder={classes.pStander}
                         classic = {classes.bgStanderd}
                         bar={classes.bgStanderd}
                         btn={classes.bgStanderd}
                         textColor={classes.colorStanderd}
                     />
                 </div>
                 <div className={'col-lg-4 col-sm-12'}>
                     <SinglePackag
                     headerTitle = "Premium"
                     price = "RS: 5000"
                     PremiumContent1={'1500 Rupees'}
                     PremiumContent2={'Get 1 skill'}
                     PremiumContent3={'You have the option of purchasing two more skills of your choice'}
                     classic = {classes.bgPremeium}
                     bar={classes.bgPremeium}
                     colorBorder={classes.pPremium}
                     btn={classes.bgPremeium}
                     textColor={classes.colorPremeium}
                     />
                 </div>
             </div>
             </div>
             </Container>
        </>
    )
}
export default Index;
