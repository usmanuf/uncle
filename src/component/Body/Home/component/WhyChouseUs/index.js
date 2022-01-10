import React from 'react';
import './style.css';
import Img1 from '../../../../../assets/Images/WhyChoose/High_tech.png'
import Img2 from '../../../../../assets/Images/WhyChoose/security_qa.png'
import Img3 from '../../../../../assets/Images/WhyChoose/pricing.png'
import Img4 from '../../../../../assets/Images/WhyChoose/service_grantee.png'
import Img5 from '../../../../../assets/Images/WhyChoose/certificate.png'
import Img6 from '../../../../../assets/Images/WhyChoose/available_time.png'
import { SiCheckmarx } from 'react-icons/si';

const WhyChoose = () =>{
    return(

        <>
            <div className={"WhyChoose"}>
                <div className={"WhyChooseServices container"}>
                    <div className={'text-best-services'}>
                        <h1 className={"heading-Title"}>
                            Why choose uncle fixer?
                        </h1>
                        <div className={"bar"}/>
                    </div>

                    <p className={"WhyChoosePara container text-center"}>
                        Uncle Fixer is Pakistan's most trustworthy top service provider. It’s an online platform that connects customers and fixers for their needs and services.
                        The Uncle Fixer crew will always be there for you in the event of a problem.The following are the most important aspects of our success:</p>
             <div className={"ChooseText"}>  <div className={"container"}>
<h3 className={"ChooseHeading"}>
    <span className={"icon"}><SiCheckmarx /> </span>  Warranty
</h3>
                   <p className={"ChoosePara"}>
                       Enjoy 7 days’ work complain warranty on jobs done. If the task completed proves unsatisfactory, after 7 days. You can recall the same fixer or another as per your liking. You can also do complain through the app.

</p>
               </div>
                    <div className={"container"}>
<h3 className={"ChooseHeading"}>
    <span className={"icon"}><SiCheckmarx /> </span> Inspection or security charges
</h3>
                   <p className={"ChoosePara"}>
                       When Uncle Fixer comes to check your problem, you will not be charged even a single dime. However, Fixers deserves to get visit charges payment. You can avail fixer as you like and choose the one of your best. The Fixer will understand your situation while staying inside your budget.
</p>
               </div>
                 <div className={"container"}>
<h3 className={"ChooseHeading"}>
    <span className={"icon"}><SiCheckmarx /> </span> Punctuality
</h3>
                   <p className={"ChoosePara"}>
                       Uncle Fixer Team is concerned about fixing problems quickly. Therefore anytime you want assistance, there is always a fixer accessible. Because the fixers you discover are dependent on their location. You will always be able to find someone who is closer to you. The Fixer is restricted to their commitment with customers to resolve the problem sooner.
</p>
               </div>
                 <div className={"container"}>
<h3 className={"ChooseHeading"}>
    <span className={"icon"}><SiCheckmarx /> </span> Security
</h3>
                   <p className={"ChoosePara"}>
                       Are you afraid of letting strangers inside your home mend things? Uncle Fixer isn't one of them, our all fixers are CNIC verified. You may assign up to three monitors from the app. The friends or family can check the fixer's activities. To ensure your safety, use the map and the location of your phone.
</p>
               </div>
                 <div className={"container"}>
<h3 className={"ChooseHeading"}>
    <span className={"icon"}><SiCheckmarx /> </span> No string attached
</h3>
                   <p className={"ChoosePara"}>
                       No annual charges, no subscription charges. Simply pay the fixer the agreed amount using your e-wallet, and you're done. You get exactly what you paid for withUncle Fixer.
</p>
               </div>
                 <div className={"container"}>
<h3 className={"ChooseHeading"}>
    <span className={"icon"}><SiCheckmarx /> </span> Size is not an issue
</h3>
                   <p className={"ChoosePara"}>
                       Don't be worried by the magnitude of your issue. Uncle Fixer is offering all sorts of services whether it’s complicated or simple. Our Fixers are highly talented and skilled they can easily deal with any task so, size is not a big deal for Uncle Fixer.
</p>
               </div>
                  <div className={"container"}>
<h3 className={"ChooseHeading"}>
    <span className={"icon"}><SiCheckmarx /> </span>  Customer satisfaction guaranteed
</h3>
                   <p className={"ChoosePara"}>
                       Last but not the least, your happiness and utility are all we care about. Uncle Fixer has a solid infrastructure that includes information on fixer evaluations and warranties. To assure you get exactly what you paid for or maybe even more.</p>
               </div>
                </div>
                </div>
                <div className={"row container m-auto"}>
<div className={"col-lg-4 col-sm-12"}>
    <div className={"whyChooseText"}>
    <img className={"imgWhyChoose"} width={'100'} height={'100'} src={Img1} alt={'#'}/>
    <h2 className={"whyChoosePara"}>Security of payments is guaranteed.</h2>
    </div>
</div>
      <div className={"col-lg-4 col-sm-12"}>
    <div className={"whyChooseText"}>
    <img className={"imgWhyChoose"}  width={'100'} height={'100'}  src={Img2} alt={'#'}/>
    <h2 className={"whyChoosePara"}>Fixers are approved and background verified.</h2>
    </div>
</div>
      <div className={"col-lg-4 col-sm-12"}>
    <div className={"whyChooseText"}>
    <img className={"imgWhyChoose"}  width={'100'} height={'100'}  src={Img3} alt={'#'}/>
    <h2 className={"whyChoosePara"}>Quality Services at reasonable price</h2>
    </div>
</div>
      <div className={"col-lg-4 col-sm-12"}>
    <div className={"whyChooseText"}>
    <img className={"imgWhyChoose"} width={'100'} height={'100'}  src={Img4} alt={'#'}/>
    <h2 className={"whyChoosePara"}>Fixers are trained professional and experienced.</h2>
    </div>
</div>
      <div className={"col-lg-4 col-sm-12"}>
    <div className={"whyChooseText"}>
    <img className={"imgWhyChoose"} width={'100'} height={'100'}  src={Img5} alt={'#'}/>
    <h2 className={"whyChoosePara"}>High-tech and cutting-edge technology</h2>
    </div>
</div>
      <div className={"col-lg-4 col-sm-12"}>
    <div className={"whyChooseText"}>
    <img className={"imgWhyChoose"} width={'100'} height={'100'}  src={Img6} alt={'#'}/>
    <h2 className={"whyChoosePara"}>We provide 24/7 customer services.</h2>
    </div>
</div>
                </div>
            </div>

        </>
    )
}
export default WhyChoose;
