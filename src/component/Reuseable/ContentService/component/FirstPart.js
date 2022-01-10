import React, {useState} from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import useStyle from './ServicesStyle';
import Loaders from "../../Loader";

const FirstPart = (props) => {
    console.log('propsfirst',props)
    const [data, setData] = useState(props.data)
    const [post, setPost] = useState(props.data[0] && props.data[0].post_tags)
    const classes = useStyle();
    return(
    <>
       <Container className={classes.paddingBottom}>
           {props.data?.length > 0 && props.data ?
               <Grid container className={classes.marginTop}>
                   {props.data.map((data) => {
                       return (<Grid container className={classes.firstParagraph}>
                               <Typography
                                   className={classes.textBold + " " + classes.subTitle}>{data.sub_title}</Typography>
                               <Typography className={classes.lineHight}>Uncle fixer provides you best <b
                                   className={""}>{data.sub_title}</b> .</Typography>
                           </Grid>
                       )
                   })}
                   <div container
                        className={classes.marginTop + " " + classes.paddingBottom + " " + "flex justify-content-center"}>
                       <div className={"row m-auto"}>
                           {props.data[0] && props.data[0]?.post_tags.map((data) => {
                               return (
                                   <div className={"col-md-4 col-lg-3 col-sm-12 boxServices"}>
                                       <div className={classes.boxInner}>
                                           <div className={classes.textTitle}>{data.title}</div>
                                           <div className={classes.lineHight}>Uncle fixer provides you
                                               best {data.title}.
                                           </div>

                                       </div>
                                   </div>
                               )
                           })}
                       </div>

                   </div>
               </Grid>

               :
               <div className={'d-flex justify-content-center my-5'}>
                   <Loaders />
               </div>
           }

        </Container>


    </>
    )
}
export default FirstPart;
