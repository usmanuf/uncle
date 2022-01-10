import React from 'react';
import './style.css';
import Typeonload from "../Typeonload/Typeonload";
import AppButton from "../Button/Button";
import {ProfileURL} from "../../../variables";
import Image from '../../../assets/Images/all-services-bg-mobile.jpg'
import {Link} from "react-router-dom";
const BreadCrumb = ({title,img,Imgs}) =>{
    return(<>
            <section className="bread">
                <img src={img? img : 'https://i.imgur.com/1PBKN6Z.png'}
                     alt="/" className={'imgBreadcrumb1'}/>
                <img src={Imgs? Imgs : Image}
                     alt="/" className={'imgBreadcrumb2'}/>
                <div className={'breadCrumb'}>

                        <div className="block">
                            <h1 className="mb-2 mt-2">{title}</h1>
                            <div className={'breadHOme'}>
                                <p>
                                    <Link className={'bresadHome'} to={'/'}>Home</Link>
                                    <span className={'bgColorBread'}> / {title} </span>
                                </p>
                            </div>
                             <div className="btn-container mb-3 ">
                             </div>
                        </div>

                </div>


            </section>
        </>
    )
}
export default BreadCrumb;
