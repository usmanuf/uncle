import { Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FaWhatsapp } from 'react-icons/fa';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Form from './Form'
const useStyle = makeStyles(theme =>({

    writtenContact : {
        display : "flex",
        flexDirection : "column",
        [theme.breakpoints.up('sm')] : {
            alignItems : "center",
            marginTop : "10px",
        },
    },
    border : {
        border : "none",
        padding: '12px'
    },


    SideRow : {
        display : "flex",
        width: "100%",
        overflowY: "none",
        marginBottom : "10px",
        [theme.breakpoints.down('sm')] : {
            marginBottom : "5px",
        },
    },
    inonStyle : {
        display : "flex",
        justifyContent: "center",
        alignItem: "center",
        height: "50px",
        fontSize: "22px!important",
        width: "50px",
        placeItems: "center",
        borderRadius : "50px",
        [theme.breakpoints.down('sm')] : {
            padding : "2px",
            width: "50px",
        },
        padding: "2px",
        background : "#1faf05",
        color : "white",
        marginRight : "20px",
    },
    mainPart : {
        margin : "25px 15px",
        [theme.breakpoints.down('sm')] : {
            margin : "0px",
        },
    },

    mapContainer : {
        marginTop : "10px",
    },
    headingMain:{
height: '100%',
        overFlow: 'auto'
    },
    headingTitle:{
        fontSize: '20px',
        fontWeight: "600",
        margin: '1px',
        textTransform: "capitalize",
        lineHeight: '18px',
    },
    City:{
        color: "#1faf05",
        fontSize: "15px",
        fontWeight: "500",

    },
    headingPara:{
        fontSize: "13px",
        fontWeight: "500",
    },
    headingParas:{
        fontSize: "14px",
        fontWeight: "500",
        color: 'black',
        margin: '2px',
        '&:hover':{
            color: 'var(--theme-color)',
            transition:'.3s'
        }
    }

}));

const ContactPage = () =>
{
    const classes = useStyle();

    const [messege, setMessege] = React.useState({
        name    : "",
        email   : "",
        messege : "",
    });
    const [value, setValue] = React.useState({});
    const [count, setCount] = React.useState(0);
    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setCount(count + 1);
        if(value ==="")
        {
            console.log("Empty")
        }
        setMessege((previousValue) =>{
            return{
                ...previousValue,
                [name] : value,
            }
        })
    }
    const onSubmit = () =>
    {
        setValue(messege);
    }
    return(<>
            <Grid container className = {classes.mainPart}>
                <Grid item xs = {12} sm = {6} className = {classes.writtenContact}>
                    <div className = {classes.border}>
                        <div className = {classes.SideRow}>
                            <div className = {classes.inonStyle}>
                                <LocationOnIcon  />
                            </div>
                            <div className={classes.headingMain}>
                                <h3 className={classes.headingTitle}>Address</h3>
                                <a className={'location'} target="_blank" href="http://maps.google.com/?q=Red Mall, Shalimar Link Road, Muslim Colony, Lahore, Punjab 56000, Pakistan">

                                <h1 className={classes.City}>Lahore</h1>
                                <address className={classes.headingPara}>
                                    Office No B-13, Second floor Red Mall<br/>
                                    Shalimar Link Road Lahore<br/>
                                </address>
                                </a>
                                <a className={'location'} target="_blank" href="http://maps.google.com/?q=Office No 71A, 4th floor, Rj Mall main Rashid Minhas road, Next to Millennium Mall, Karachi.">
                                <h1 className={classes.City}>Karachi</h1>
                                <address className={classes.headingPara}>
                                    Office No 71A, 4TH Floor, RJ Mall Main <br/>Rashid Minhas Road, Next to Millennium Mall, Karachi.<br/>
                                </address>
                                </a>
                            </div>
                        </div>

                        <div className = {classes.SideRow}>
                            <div className = {classes.inonStyle}>
                                <CallIcon/>
                            </div>
                            <div className={classes.headingMain}>
                                <h3 className={classes.headingTitle}>Contact Number</h3>

                                <a className={classes.headingParas}
                                    target={'_blank'} href={'tel:03401122222'}>+92 340 11 22222
                                </a>
                            </div>
                        </div>
                        <div className = {classes.SideRow}>
                            <div className = {classes.inonStyle}>
                                <FaWhatsapp/>
                            </div>
                            <div className={classes.headingMain}>
                                <h3 className={classes.headingTitle}>WhatsApp Number</h3>

                                <a className={classes.headingParas}
                                    target={'_blank'} href={'https://api.whatsapp.com/send?phone=+9203011400200&amp;text=WellCome%20to%20Uncle%20Fixer%20'}>+92 301 1400200
                                </a>
                            </div>
                        </div>
                        <div className = {classes.SideRow}>
                            <div className = {classes.inonStyle}>
                                <MailOutlineIcon />
                            </div>
                            <div className={classes.headingMain}>
                                <h3 className={classes.headingTitle}>Email Address</h3>

                                <a target={'_blank'} href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=help@unclefixer.com" className={classes.headingParas}>
                                   help@unclefixer.com
                                </a>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs = {12} sm = {6} >
                    <Form/>
                </Grid>
            </Grid>




    </>)
}
export default ContactPage;
