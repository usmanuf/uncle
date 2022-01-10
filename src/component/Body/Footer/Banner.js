import React from 'react';
import {Grid} from "@material-ui/core";
import HeadsetIcon from '@material-ui/icons/Headset';
import './style.css'
const Home = () =>{
    return(

        <>
           <div className={"banner"}>
               <div className={"banner-grid row"}>
                   <div className={"banner-item col-sm-12 col-md-6 col-lg-6"}>
<div className={"banner-call"}>
        <div className={"banner-icon"}>
    <HeadsetIcon className={"icon-banner"} fontSize="large"/>
    </div>
    <div className={"banner-text"}>
        <div className={"banner-heading"}>
            Call Us
        </div>
            <div className={"banner-para"}>
                If you have any queries about Uncle Fixer, please contact us.
        </div>
    </div>
</div>
                   </div>
                <div className={"banner-item  col-sm-12 col-md-6 col-lg-6"}>
                    <a href="tel:03401122222" className={"banner-number"}>
                        + 92 340 11 22222
                    </a>
                   </div>
               </div>
        </div>
            </>
    )
}
export default Home;
