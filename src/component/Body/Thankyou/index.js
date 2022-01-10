import React, {Component, useEffect} from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
const ThankYou=()=>{

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
        <div className={'ThankOY'}>
            <div>
            <div className="thankYou">
                <div className="sign">
                    <span className="fast-flicker">T</span>hank <span className="flicker ml-3"> Y</span>ou
                </div>
                {/*<svg viewBox="0 0 100 20">*/}
                {/*    <defs>*/}
                {/*        <linearGradient id="gradient">*/}
                {/*            <stop color="#000"/>*/}
                {/*        </linearGradient>*/}
                {/*        <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">*/}
                {/*            <path id="wavePath"*/}
                {/*                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"*/}
                {/*                  mask="url(#mask)" fill="url(#gradient)">*/}
                {/*                <animateTransform*/}
                {/*                    attributeName="transform"*/}
                {/*                    begin="0s"*/}
                {/*                    dur="1.5s"*/}
                {/*                    type="translate"*/}
                {/*                    from="0,0"*/}
                {/*                    to="40,0"*/}
                {/*                    repeatCount="indefinite"/>*/}
                {/*            </path>*/}
                {/*        </pattern>*/}
                {/*    </defs>*/}
                {/*    <text text-anchor="middle" x="50" y="15" font-size="27" fill="white" fill-opacity="0.1">UncleFixer*/}
                {/*    </text>*/}
                {/*    <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)" fill-opacity="1">UncleFixer*/}
                {/*    </text>*/}
                {/*</svg>*/}


                {/*<h1 className="thankYou-headinG">Thank You</h1>*/}
                <div className="thankYou-conTent">
                    <h2 className="thankYou-conTent-headinG">Thank you for choosing Uncle Fixer. We have received your request and will respond you within few minutes as soon as possible.
                        Your request is currently being processed. Stay close! We're really fortunate to have customers like you!</h2>
                </div>
            </div>
            <div className="col-md-12 text-center">
                <p className="text-center" style={{ fontSize: 20 }}>
                    You can download Our App
                </p>
            </div>
                <div className="thankYou-linK">
                    <img src={require("../../../assets/Images/appstore copy.png").default} className="thankYou-linK1  img-fluid" style={{ cursor: 'pointer' }} onClick={() => appStore()} alt="playstore" />
                    <img src={require("../../../assets/Images/google-play-store.png").default} className=" thankYou-linK1  img-fluid" style={{ cursor: 'pointer' }} onClick={() => playStore()} alt="appstore" />
                </div>
                <div className={'whatsappBtn mt-3'}>
                    <a href="https://api.whatsapp.com/send?phone=+923011400200&text=" target={"_blank"}
                       className="theme text-white text-uppercase flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700  md:py-4 md:text-lg md:px-10">
                         <FaWhatsapp className={'mx-1'}/> WhatsApp
                    </a>
                    <Link className={'hometoBack'}  to={'/'}>Back to Home</Link>
                </div>

            </div>

            {/*<div className="page-content page-container" id="page-content">*/}
            {/*    <div className="padding">*/}
            {/*        <div className="row container d-flex justify-content-center">*/}
            {/*            <div className="template-demo mt-2">*/}
            {/*                <button className="btn btn-outline-dark btn-icon-text"><i*/}
            {/*                    className="fa fa-apple btn-icon-prepend mdi-36px"></i> <span*/}
            {/*                    className="d-inline-block text-left"> <small className="font-weight-light d-block">Available on the</small> App Store </span>*/}
            {/*                </button>*/}
            {/*                <button className="btn btn-outline-dark btn-icon-text"><i*/}
            {/*                    className="fa fa-android btn-icon-prepend mdi-36px"></i> <span*/}
            {/*                    className="d-inline-block text-left"> <small className="font-weight-light d-block">Get it on the</small> Google Play </span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}



            {/*<div className="container">*/}

            {/*    <div className="row">*/}

            {/*        <div className="col-md-12">*/}

            {/*            <a className="btn btn-lg btn-primary big-btn" href="#">*/}
            {/*                <i className="glyphicon glyphicon-phone pull-left"></i>*/}
            {/*                <div className="btn-text"><small>Available on the</small><br/><strong>App Store</strong>*/}
            {/*                </div>*/}
            {/*            </a>*/}

            {/*            <a className="btn btn-lg btn-success big-btn android-btn" href="#">*/}
            {/*                <img width="80px" className="pull-left"*/}
            {/*                     src="http://www.userlogos.org/files/logos/jumpordie/google_play_04.png"/>*/}
            {/*                    <div className="btn-text"><small>Available on</small><br/><strong>Google Play</strong>*/}
            {/*                    </div></a>*/}

            {/*            <a className="btn btn-lg btn-success big-btn windows-btn" href="#">*/}
            {/*                <img width="60px" className="pull-left"*/}
            {/*                     src="http://1.bp.blogspot.com/-rD2_M6Vvv6w/UbmywLq5V8I/AAAAAAAACko/BEcR4QqtkRI/s1600/Windows%2BStore%2BLogo.png"/>*/}
            {/*                    <div className="btn-text">Windows<br/>Store</div></a>*/}


            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}


export default ThankYou;

