import React, {useState} from 'react';
import { Button, Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import './style.css'
import { Typography } from '@material-ui/core';
// import Images from '../../../../assests/ExtraImages/background.jpg';
import useStyle from './ServicesStyle';
import {Link} from "react-router-dom";
const SecondPart = (props) =>{

    const [data, setData] = useState(props.data)
    console.log('propsecondff',props.data)
    const [post, setPost] = useState(props?.data[0]?.post_tags)
    const classes = useStyle();
    return(

    <> {
        console.log('dattaaaaaa', data)
    }
    <Container className={"py-5"}>
        <Grid container>
            <Grid item xs={12} sm={12}>
                {props.data.map((data)=>{
                    return(   <Container>
                    <Typography variant="h5" align="left" className={classes.textBold}>{data.title}</Typography>
                            <div className={'dangeriousText'} dangerouslySetInnerHTML={{
                                    __html: `${data.description}`
                                }}/>
                </Container>
                    ) })}
            </Grid>
            <Grid item xs={12} sm={4}>
               <Container>

               </Container>
            </Grid>
        </Grid>
       <Container>
           <Grid container className={classes.marginTop}>
               <Grid item xs={12} md={8} align={'left'}>

                 <div className={'mt-2'}>
                     <button className={"linksButton-book"}>
                         <Link className={'linkbtn'} to={'/book-now/'}>book now</Link>
                     </button>
                     <button className={"linksButton-whatsapp"}>
                         <a href={'https://api.whatsapp.com/send?phone=+9203011400200&amp;text=WellCome%20to%20Uncle%20Fixer%20'}
                            target={'_blank'} className={'linkbtn'}>Whatsapp</a>
                     </button>
                 </div>

               </Grid>

           </Grid>
       </Container>
        </Container>
    </>
    )
}
export default SecondPart;
