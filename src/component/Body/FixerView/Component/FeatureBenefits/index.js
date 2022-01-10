import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Img1 from '../../../../../assets/icons/receiving-limitless-jobs.png';
import Img2 from '../../../../../assets/icons/customer-dashboard.png';
import Img3 from '../../../../../assets/icons/engage-and-approach.png';
import Img4 from '../../../../../assets/icons/around-the-city.png';
import Img5 from '../../../../../assets/icons/list-best-fixers.png';
import Img6 from '../../../../../assets/icons/services-icon.png';
import './style.css'
const Name = () =>{
    return(
        <div className={'bgFreature'}>
            <div className={"container FeatureBenefits py-4"}>
                <div className={""}>
                    <div className={'headingCenter'}>

                        <h1 className={"heading-Title"}>
                            Benefits of Becoming a Featured ID Fixer:
                        </h1>
                        <div className={"bar"}/>
                    </div>

                    <div className={'benefitsFaqs'}>
                        <div className={"faqText"}>
                            <div className={"faqsIcon"}><img src={Img1} alt={'/'} className={'imglogoFeature'}/></div>
                            <p className={"faqPara"}>
                                By using featured id, fixers have a better possibility of receiving limitless jobs.
                            </p>
                        </div>
                        <div className={"faqText"}>
                            <div className={"faqsIcon"}><img src={Img2} alt={'/'} className={'imglogoFeature'}/></div>
                            <p className={"faqPara"}>
                                Fixers appear directly on the customer's dashboard.
                            </p></div>
                        <div className={"faqText"}>
                            <div className={"faqsIcon"}><img src={Img3} alt={'/'} className={'imglogoFeature'}/></div>
                            <p className={"faqPara"}>
                                Customers can approach featured id fixers and engage with them easily.
                            </p>
                        </div>
                        <div className={"faqText"}>
                            <div className={"faqsIcon"}><img src={Img4} alt={'/'} className={'imglogoFeature'}/></div>
                            <p className={"faqPara"}>
                                Using the featured id, the fixer may obtain jobs from all around the city.
                            </p>
                        </div>
                        <div className={"faqText"}>
                            <div className={"faqsIcon"}><img src={Img5} alt={'/'} className={'imglogoFeature'}/></div>
                            <p className={"faqPara"}>
                                Uncle Fixer shows you a list of the best fixers.
                            </p>
                        </div>
                        <div className={"faqText"}>
                            <div className={"faqsIcon"}><img src={Img6} alt={'/'} className={'imglogoFeature'}/></div>
                            <p className={"faqPara"}>
                                Our Featured ID Services are AC, Solar Installation,
                                CCTV, Electrician, Plumber, and
                                Home Appliances
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Name;
