import React from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import useStyle from './ServicesStyle';
const ThirdPart = () =>{
    const classes = useStyle();
    return(<>
    <Container className={"py-5"}>
       <Grid container>
       <Container>
       <Typography variant ="h5" className={classes.textBold} align="left">HERE IS HOW WE CAN HELP</Typography>
       <Typography align="left">
       <span className={classes.textBold}>AC SERVICES:</span>
       The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href,
        but still need the element to resemble a link, use a button and change it with appropriate styles.
       </Typography>
       <br/>
       <Typography align="left">
       <span className={classes.textBold}>AC SERVICES:</span>
       The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href,
        but still need the element to resemble a link, use a button and change it with appropriate styles.The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.
       </Typography>
       <br/>
       <Typography align="left">
       <span className={classes.textBold}>AC SERVICES:</span>
       The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href,
        but still need the element to resemble a link, use a button and change it with appropriate styles.
       </Typography><br/>
       <Typography align="left">
           <span className={classes.textBold}>AC SERVICES:</span>
       The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href,
        but still need the element to resemble Provide a valid, navigable address as the href value. If you cannot provide a valid href,
        but still need the element to resemble a link, use a button and change it with appropriate styles.
       </Typography>
       </Container>
       </Grid>
    </Container>
    </>)
}
export default ThirdPart;
