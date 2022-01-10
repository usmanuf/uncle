import React from 'react';
import TablesFourth from "./Component/Pakages";
import './style.css';
import './styles.css';
import Feature from "./Component/Feature";
import Carousel from "../Skillpackage/3dCarousel/index";
const Fourth = () =>{
    return(
        <div>
            {/*<Carousel/>*/}
            <div className="relative bg-white border-b overflow-hidden">
                <div className="max-w-7xl mx-auto">
 <div
                        className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"/>
                        </svg>

                        <div>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">

                            </div>
                            <div
                                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
 </div>
                        </div>

                        <main
                            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">What is </span>
                                    <span className="block text-theme xl:inline"> Featured ID?</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Uncle Fixer proudly introduce a unique way for our fixers to introduce thier skills with featured profiles on our map based platform.
                                    In this way fixers can avail more chances to get unlimited tasks and earn more and more.
                                </p>
                                <div className=" sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="mt-3 sm:mt-0 sm:ml-3">

                                        <a href="https://api.whatsapp.com/send?phone=+923011400200&text="
                                           className="w-full theme text-white text-uppercase flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700  md:py-4 md:text-lg md:px-10">
                                            <i className="fa fa-whatsapp mx-1"></i>  WhatsApp
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">


                                        <a href="tel:03011400200"
                                           className="w-full text-uppercase text-theme flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black-50 bg-indigo-100  md:py-4 md:text-lg md:px-10">
                                            <i className="fa fa-phone mx-1"></i>Call Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="img-banner object-cover "
                         src="../../../public/frontend_assets/img/website-feature-id.jpg"
                         alt="website feature id"/>
                </div>
                <div >
                    <img className="img-banner2 object-cover"
                         src="../../../public/frontend_assets/img/feature-id(400x600).jpg"
                         alt="feature id"/>
                </div>
            </div>


<Feature/>

            <TablesFourth/>
        </div>
    )

}
export default Fourth;
