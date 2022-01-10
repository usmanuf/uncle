import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import './style.css'
const Name = () =>{
    return(
        <div className={"Requirements py-4"}>
            <div className={"container"}>
                <div className={'headingCenter'}>

                    <h1 className={"heading-Title"}>
                        Requirements for Featured ID
                    </h1>
                    <div className={"bar"}/>
                </div>

                <div className={'benefitsFaqs'}>
                    <div className={"faqText"}>
                        <div className={"faqsIcon"}><IoIosArrowForward/></div>
                        <p className={"faqPara"}>
                            If any discount offer is introduced from Uncle Fixer. It is compulsory to follow
                            this offer for Featured ID Fixer.
                        </p>
                    </div>
                    <div className={"faqText"}>
                        <div className={"faqsIcon"}><IoIosArrowForward/></div>
                        <p className={"faqPara"}>
                            Upload your selfie with original and valid CNIC card and as well as a picture of
                            your most recent utility bill that you have paid. (For male)
                        </p></div>
                    <div className={"faqText"}>
                        <div className={"faqsIcon"}><IoIosArrowForward/></div>
                        <p className={"faqPara"}>
                            Upload your original and valid CNIC card picture and picture of your latest
                            utility bill that is recently you have paid. (For female)
                        </p>
                    </div>
                    <div className={"faqText"}>
                        <div className={"faqsIcon"}><IoIosArrowForward/></div>
                        <p className={"faqPara"}>
                            If you have any certificate, degree or license of your skill you can upload its
                            picture but it’s optional.
                        </p>
                    </div>
                    <div className={"faqText"}>
                        <div className={"faqsIcon"}><IoIosArrowForward/></div>
                        <p className={"faqPara"}>
                            You can only get your Featured ID if you use one of our hot skills
                        </p>
                    </div>
                    <div className={"faqText"}>
                        <div className={"NoteTExt"}>Note:</div>
                        <p className={"faqPara"}>
                            <b>You can purchase any skill whatever you want in 500 rupees.</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Name;
