import React, {useEffect, useState} from 'react'
import { Container } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FixerImage from './Assets/fixerLogo.jpeg';
import useStyle from './DetailsStyle'
import {FaPinterestSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './style.css';

import axios from "axios";
 const Detail = (props) => {
     console.log('job props', props)

     const[data,setJobdetails]=useState([]);
     useEffect(() => {
         const getServiesData = () => {
             axios.get('https://unclefixer.co.uk/api/job/jobSingle/'+props.match.params.slug).then((responce) => {
                 console.log('details jobs',responce.data.data)
                 setJobdetails(responce.data.data[0])
             })
                 .catch(error => console.error(`Error: ${error}`));
         };
         getServiesData();
     }, []);

     const classes = useStyle();
    return (
        <div className={'jobDetails'}>
            <Container>
                <div className={classes.detailWidth}>
                    <Grid container>
                    <Grid item xs={12} md={8} >
                        <div className={classes.DetailLeftSide}>
                            <Typography variant="h5">
                                {data.name}
                            </Typography>
                            <div className={classes.downHeaderDetails}>
                            <Typography className={classes.themeColor}>
                                <ApartmentIcon className={classes.headerIcon}/>
                                <span>Uncle Fixer</span>
                            </Typography>
                            <Typography className={classes.location}>
                                <LocationOnIcon className={classes.headerIcon}/> {data.city?.name}
                            </Typography>
                            </div>
                            <Typography className={classes.detailPageDiscription}>
                                <div className={classes.textLeft} dangerouslySetInnerHTML={{
                                    __html: `${data.description}`
                                }}/>

                            </Typography>
                            <div className={classes.skills}>
                                <Typography className={classes.textBold}>Skills</Typography>
                                {data.job_tags?.map((data,key)=>{
                                    return( <div key={key} className={classes.skillTypes}>
                                        <span className={classes.unitSkill}>{data.name}</span>
                                    </div>)
                                })}

                            </div>
                            <div className={classes.requirements}>
                                <h2 className={'requirment'}>Requirements:</h2>
                                <table className={classes.tableStyle + " " + "table-style"}>
                               <tr>
                                   <td>Job Shift</td>
                                   <td>{data.job_shift}</td>
                               </tr>
                               <tr>
                                   <td>Job Type</td>
                                   <td>{data.job_type}</td>
                               </tr>
                               <tr>
                                   <td style={{marginRight:"20px"}}>Gender</td>
                                   <td>{data.gender}</td>
                               </tr>
                               <tr>
                                   <td>Experience</td>
                                   <td>{data.experience}</td>
                               </tr>
                               <tr>
                                   <td>Vacancy</td>

                                   <td>{data.no_of_vacancies}</td>
                               </tr>
                               <tr>
                                   <td>Languages</td>

                                   <td>English, Urdu</td>
                               </tr>
                               <tr>
                                   <td>Apply Before</td>

                                   <td>{data.job_apply_date}</td>
                               </tr>

                               </table>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs = {12} md={4} >
                        <div className={classes.detailRightSide}>

                            <div className={classes.fixerLogo}>
                            <img src = {FixerImage} className={classes.jobDetailImage} alt="Uncle Fixer"/>
                            </div>
                            <Typography variant="h6" className={classes.rightSideHeading} align="center">
                                {data.name}
                            </Typography>

                            <div className={classes.rightSideBtnDiv}>
                               <Link to={{pathname:"/applyForm",data:{data: data.id} }} className={classes.detailApplyBtn}> <Button variant="contained" className={classes.rightSideBtn}>Apply Now</Button></Link>
                            </div>
                        </div>
                        <div className = {classes.detailRightBottom}>
                            <Typography variant="h7" className={classes.textBold}>
                                Share This Job
                            </Typography>
                            <hr className={classes.hr}/>
                            <Grid container>
                            <Grid xs={4} ><a href={'https://www.facebook.com/UncleFixer/'} target={'blank'} className={classes.mediaBlock + " " + classes.faIcon}><FaFacebookF/></a></Grid>
                            <Grid xs={4} ><a href={'https://twitter.com/fixer_uncle\n'} target={'blank'}  className={classes.mediaBlock + " " + classes.twIcon}><FaTwitter/></a></Grid>
                            <Grid xs={4} ><a href={' https://www.pinterest.com/unclefixer'} target={'blank'} className={classes.mediaBlock + " " + classes.gpIcon}><FaPinterestSquare/></a></Grid>
                            <Grid xs={4} ><a href={'https://www.instagram.com/unclefixer/'} target={'blank'} className={classes.mediaBlock + " " + classes.inIcon}><FiInstagram /></a></Grid>
                            <Grid xs={4} ><a href={'https://www.linkedin.com/company/uncle-fixer/'} target={'blank'}  className={classes.mediaBlock + " " + classes.lnIcon}><FaLinkedinIn/></a></Grid>
                            <Grid xs={4} ><a href={'https://www.youtube.com/channel/UC4c52zwz3YwBXbq0vQH3aag'} target={'blank'} className={classes.mediaBlock + " " + classes.beIcon}><FaYoutube/></a></Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                </div>
            </Container>

        </div>
    )
}

export default Detail;
