import React from 'react';
import useStyle from './packagesStyle';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
const SinglePackag = ({bar, headerTitle, classic, colorBorder, textColor, btn, price,basicContent,standerdContent1,standerdContent2,standerdContent3,PremiumContent1,PremiumContent2,PremiumContent3}) =>{
    const classes = useStyle();
    return(<>
    <div className={classes.packegeBasic}>
                    <div className={classes.header+" "+classic}>
                        <p>{headerTitle}</p>
                    </div>
        <div className={classes.cubeBorder+" "+colorBorder} />

                    <div className={classes.packegeBody}>
<div className={'packagePara'}>

                        <p> {basicContent} {standerdContent1} {PremiumContent1}</p>
                        <p> {standerdContent2} {PremiumContent2}</p>
                        <p> {PremiumContent3} {standerdContent3}</p>



</div>
                    </div>
                <div className={classes.fullBar+" "+bar}/>
                    <Typography variant="h3" className = {classes.price+" "+textColor}>
                       {price}
                    </Typography>
        <div className={classes.fullBar+" "+bar}/>
                    <div className = {classes.btnContainer}>
                        <div className={classes.btnStyle+" "+btn} variant="contained"><Link to={"/feature-form"} className={classes.btnPackage}>Buy Package</Link></div>
                </div>
                </div>
    </>)
}
export default SinglePackag;
