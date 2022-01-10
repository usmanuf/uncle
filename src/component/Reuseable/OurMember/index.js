import React from 'react';
// import Loader from "react-loader-spinner";
import './style.css'
import Logo from '../../../../src/assets/Loader/loader.gif'
const Loaders = () => {
    //other logic

    return (
        <>
            <div className="demo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10">
                            <div className="email-signature">
                                <div className="signature-icon">
                                    <img src="images/img-1.jpg" alt=""/>
                                </div>
                                <div className="signature-details">
                                    <h2 className="title">Miranda <span>Roy</span></h2>
                                    <span className="post">web designer</span>
                                    <ul className="social-links">
                                        <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <ul className="signature-content">
                                    <li><i className="fa fa-phone"></i> (123)456-7890</li>
                                    <li><i className="fa fa-envelope"></i> example1@example.com</li>
                                    <li><i className="fas fa-map-marker-alt"></i> Full address here,Town</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> );
}
export default Loaders;
