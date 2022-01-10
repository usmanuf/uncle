import React from 'react';
import './style.css';
import Typeonload from "../Typeonload/Typeonload";
import AppButton from "../Button/Button";
import {ProfileURL} from "../../../variables";
import {Link} from "react-router-dom";
const BreadCrumb = ({title,img,Imgs}) =>{
    return(<>
            <section className="bread">
                <img src={img? img : 'https://i.imgur.com/1PBKN6Z.png'}
                      className={'imgBreadcrumb'}/>
                     <div className={'breadCrumb'}>
                         <div className="container">


                                     <div className="block">
                                         <div className="title">
                                             {/*<h2>*/}
                                             {/*    <Typeonload text={'Well Come To Uncle Fixer'} />*/}
                                             {/*    <small className='graytext' style={{fontSize: '15px'}}>*/}
                                             {/*        <Typeonload text='We fix lives' startDelay={2000} />*/}
                                             {/*    </small>*/}
                                             {/*</h2>*/}

                                             {/*<div className="devider"><i className="fa fa-heart "></i></div>*/}
                                         </div>
                                         {/*<span className="text-uppercase text-sm letter-spacing ">we Provide best Service in our Customer</span>*/}
                                         <h1 className="mb-2 mt-2">{title}</h1>
<div className={'breadHOme'}>
    <p><Link className={'bresadHome'} to={'/'}>Home</Link>
        <span className={'bgColorBread'}> / {title} </span>
    </p>
</div>
                                         {/*<p className="text-breadcrumb">The quality you expect, the service you deserve! Download the Uncle Fixer app</p>*/}
                                         <div className="btn-container mb-3 ">
                                             {/*<AppButton link={'/book-now/'} text='Book Now' icon='fal fa-arrow-right'/>*/}
                                         </div>
                                     </div>
                                 </div>
                             </div>


            </section>
        </>
    )
}
export default BreadCrumb;
