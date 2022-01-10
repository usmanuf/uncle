import React, {useEffect, useState} from 'react'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Router } from 'react-router'
import { Typography } from '@material-ui/core'
import useStyle from './JobsStyle'
import { Button } from '@material-ui/core'
import axios from "axios";
import './App.css'
export const SingleCard = (Props) => {

console.log('prpspsppsps', Props.id)

    const classes = useStyle();
    return (
        <>
            <Container className={'mb-4'}>
                    <div className={classes.cards + ' ' + 'cardJob'}>
                        <div className="ribbon-wrapper">
                                <div className="ribbon-tag">{Props.cities.name}</div>
                        </div>
                        <Grid container >
                            <Grid item xs={12} md={9} className={classes.cardContent}>
                                <Typography variant="h5" className={classes.jobHeading}>
                                    {Props.titleHeading}
                                </Typography>
                                <div className={classes.textAligns}>
                                    <div className={classes.jobDescription} align="justify">
                                        <div className={'contentJob'} dangerouslySetInnerHTML={{
                                            __html: `${Props.jobDiscription}`
                                        }}/>

                                    </div>
                                    <Typography>
                                        <div className={classes.ReadMoreLink}>More Detail</div>
                                    </Typography>
                                    <Typography className={classes.vacancyNumber}>
                                        Vacancy : {Props.numberVacancies}
                                    </Typography>
                                    <Typography>
                                        Last Date : {Props.Date}
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3} className={classes.cardButton}>
                            <Link to={{pathname:"/applyForm",data:{data: Props.id} }} className={classes.btnLink}><Button className={classes.btnStyle}  variant="contained">Apply Now</Button></Link>
                            </Grid>
                        </Grid>
                    </div>

            </Container>
        </>
    )
}
