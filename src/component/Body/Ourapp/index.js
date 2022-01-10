import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import Img from '../../../assets/Images/app-img.png';
import {FaWhatsapp} from "react-icons/fa";
const Extra = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const playStore = () => {
        window.location = "https://play.google.com/store/apps/details?id=com.unclefixer";
    }

    const appStore = () => {

        window.location = "https://apps.apple.com/us/app/unclefixer/id1490258196?ls=1";
    }

    return(
        <div >

            <div className="OurApp">




                <div className="items-center somw md:flex md:space-x-6">

                    <div className="mt-0  md:mt-0 md:w-1/2">
                        <div className="flex items-center justify-center">
                            <div className="">
                                <img src={Img} alt="#"/>
                            </div>
                        </div>

                    </div>

                    <div className="md:w-1/2 container sm:text-center md:text-left">
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                            <span className="block sm:inline">Download Uncle Fixer </span>

                            <span className="block text-theme md:inline"> for all your needs</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Uncle Fixer proudly introduces several handyman services and opportunities for earning.
                            You can get handyman services at your doorstep (for customers) as well as you have chance to utilize your talent (for fixers).
                            Uncle Fixer is concerned about your future and here to make your life more feasible.
                            Download the Uncle Fixer app from Play store or visit our website to get more information.
                        </p>

                        <div className="thankYou-linK mt-3">
                            <img src={require("../../../assets/Images/appstore copy.png").default} className="thankYou-linK1  img-fluid" style={{ cursor: 'pointer' }} onClick={() => appStore()} alt="playstore" />
                            <img src={require("../../../assets/Images/google-play-store.png").default} className=" thankYou-linK1  img-fluid" style={{ cursor: 'pointer' }} onClick={() => playStore()} alt="appstore" />
                        </div>
                        <div className={'whatsappBtn mt-3'}>
                            {/*<a href="https://api.whatsapp.com/send?phone=+923011400200&text=" target={"_blank"}*/}
                            {/*   className="theme text-white text-uppercase flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700  md:py-4 md:text-lg md:px-10">*/}
                            {/*    <FaWhatsapp className={'mx-1'}/> WhatsApp*/}
                            {/*</a>*/}
                            <Link className={'hometoBack'}  to={'/'}>Go to Unclefixer</Link>
                        </div>

                        {/*<div className="mt-3 sm:mt-0 sm:ml-3">*/}
                        {/*    <Link to="/feature-id">*/}
                        {/*        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-sm my-2 py-3 px-12 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">*/}
                        {/*            Feature ID*/}
                        {/*        </button>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>




                </div>



            </div>

        </div>
    )
}
export default Extra;
