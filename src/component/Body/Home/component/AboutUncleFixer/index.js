import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {Grid} from "@material-ui/core";
const Home = () =>{
    return(

        <>
         <div className={"about-fixers"}>
             <Grid container  className={"container py-5 about-fixer"}>
<div>
    <h1 className={"heading-Title"}>
       About Uncle Fixer
    </h1>
    <div className={"bar m-auto"}/>
</div>
             <div className={"text-About-fixer container"}>
                 Uncle Fixer is Pakistan’s most reputable top <b>Handyman services</b> provider. Our mission is to accomplish two goals with single action. We offer productivity in both customer and worker’s (fixers) lives. Uncle Fixer enraptured thousands of hearts over the years by connecting customers to fixers.
             </div>
             <div className={"row about-fixer-row"}>
                 <div className={'about-fixer-btn col-sm-12 col-md-6'}>
                     <Link to={'/become-a-customer/'}>
                         <button className="btn-Home">
                             Become a Customer
                         </button>
                     </Link>
                 </div>
                 <div className={'about-fixer-btn col-sm-12 col-md-6'}>
                     <Link to={'/become-a-fixer/'}>
                         <button className="btn-Home">
                             Become a Fixer
                         </button>
                     </Link>
                 </div>



             </div>
             </Grid>
        </div>
            </>
    )
}
export default Home;
