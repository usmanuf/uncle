import React, {useState} from 'react';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import useStyle from './ServicesStyle';
const Services = ({data}) =>{
console.log('datafrgete',data)
    const classes = useStyle();
    return(
    <>
        {data && <FirstPart data={data}/>}
       <div className={classes.background}>
           {data && <SecondPart data={data} />}
       </div>
    </>
    )
}
export default Services;
