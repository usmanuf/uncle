import React from 'react';
import Faq from './Faq/Faq';

const Faqs = () =>{
    return(
        <>
            <div className={'headingCenter'}>
                <h1 className={"heading-Title"}>
                    Frequently Asked Questions:
                </h1>
                <div className={"bar"}/>
            </div>
      <Faq/>
        </>
    )
}
export default Faqs;
