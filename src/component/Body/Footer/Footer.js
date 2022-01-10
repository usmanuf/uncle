import React from "react";
import "./style.css";
import Banner from "./Banner";
import { Grid } from "@material-ui/core";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const Name = () => {
    return (
        <>
            <div className={"footer"}>
                {/*<Banner />*/}
                <div className={"top-footer container"}>
                    <div className={"row container"}>
                        <div
                            className={"footer-styled col-lg-3 col-md-3 col-sm-6 col-xs-12"}
                        >
                            <div className={"footer-text"}>
                                <div className={"footer-heading"}>About Us</div>
                                <div className={"footer-bar"} />
                                <h6 className={"footer-paras"}>
                                    Uncle Fixer is Pakistan’s most reputable top{" "}
                                    <b className={""}>Handyman services</b> provider and one ofthe
                                    first <b className={""}>freelancing sites</b>. Our mission is
                                    to accomplish two goals with single action. We offer
                                    productivity in both customer and worker’s (fixers) lives.
                                </h6>
                            </div>
                            <div className={"footer-social-link"}>
                                <div className={"footer-heading"}>Social Links</div>
                                <div className={"footer-bar"} />
                                <div className={"footer-link"}>
                                    <a
                                        href={"https://www.facebook.com/UncleFixer/"}
                                        target={"blank"}
                                        className={"footer-icon"}
                                    >
                                        <FaFacebook />
                                    </a>
                                    <a
                                        href={"https://twitter.com/fixer_uncle\n"}
                                        target={"blank"}
                                        className={"footer-icon"}
                                    >
                                        <FaTwitter />
                                    </a>
                                    <a
                                        href={"https://www.instagram.com/unclefixer/"}
                                        target={"blank"}
                                        className={"footer-icon"}
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href={"https://www.linkedin.com/company/uncle-fixer/"}
                                        target={"blank"}
                                        className={"footer-icon"}
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href={" https://www.pinterest.com/unclefixer"}
                                        target={"blank"}
                                        className={"footer-icon"}
                                    >
                                        <FaPinterestSquare />
                                    </a>
                                    <a
                                        href={
                                            "https://www.youtube.com/channel/UC4c52zwz3YwBXbq0vQH3aag"
                                        }
                                        target={"blank"}
                                        className={"footer-icon"}
                                    >
                                        <FaYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"footer-styled col-lg-3 col-md-3 col-sm-6 col-xs-12"}
                        >
                            <div className={"footer-text"}>
                                <div className={"footer-heading"}>Popular Services</div>
                                <div className={"footer-bar"} />
                                <div className={"foot-magr"}>
                                    <Link to={"/service/ac-services"} className={"footer-para"}>
                                        AC Services
                                    </Link>{" "}
                                    <br></br>
                                    <Link
                                        to={"/service/electrician-services"}
                                        className={"footer-para"}
                                    >
                                        Electrician Services
                                    </Link>
                                    <br></br>
                                    <Link to={"/service/cctv-services"} className={"footer-para"}>
                                        CCTV Services
                                    </Link>
                                    <br></br>
                                    <Link
                                        to={"/service/plumber-services"}
                                        className={"footer-para"}
                                    >
                                        Plumbing Services
                                    </Link>
                                    <br></br>
                                    <Link
                                        to={"/service/home-appliances-services"}
                                        className={"footer-para"}
                                    >
                                        Home Appliances Services
                                    </Link>
                                    <br></br>
                                    <Link
                                        to={"/service/carpentry-services"}
                                        className={"footer-para"}
                                    >
                                        Carpenter Services
                                    </Link>
                                    <br></br>
                                    <Link
                                        to={"/service/home-generator-services"}
                                        className={"footer-para"}
                                    >
                                        Home Generator Services
                                    </Link>
                                    <br></br>
                                    <Link
                                        to={"/service/home-tailoring-services"}
                                        className={"footer-para"}
                                    >
                                        Home Tailoring Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className={" footer-styled col-lg-3 col-md-3 col-sm-6 col-xs-12"}
                        >
                            <div className={"footer-text"}>
                                <div className={"footer-heading"}>Main Menu</div>
                                <div className={"footer-bar"} />
                                <div className={"linksTop"}>
                                    <Link to={"/"} className={"footer-para"}>
                                        Home
                                    </Link>
                                    <Link to={"/about-us/"} className={"footer-para"}>
                                        About Us
                                    </Link>
                                    <Link to={"/services/"} className={"footer-para"}>
                                        Services
                                    </Link>
                                    <Link to={"/jobs"} className={"footer-para"}>
                                       jobs
                                    </Link>
                                    <Link to={"/contact-us/"} className={"footer-para"}>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className={" footer-styled col-lg-3 col-md-3 col-sm-6 col-xs-12"}
                        >
                            <div className={"footer-text"}>
                                <div className={"footer-heading"}>Contact Us</div>
                                <div className={"footer-bar"} />
                                <a
                                    target={"_blank"}
                                    href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=help@unclefixer.com"
                                    className={"link-Footer"}
                                >
                                    <h6 className={"footer-para align-text"}>
                                        <div className={"footer-icons"}>
                                            <MdEmail />
                                        </div>
                                        <span className={"d-block "}>Help@unclefixer.com</span>
                                    </h6>
                                </a>
                                <a href="tel:03401122222" className={"link-Footer"}>
                                    <h6 className={"footer-para align-text"}>
                                        <div className={"footer-icons"}>
                                            <FaPhoneVolume />
                                        </div>
                                        0340-1122222
                                    </h6>
                                </a>
                                <a
                                    className={"link-Footer"}
                                    target="_blank"
                                    href="http://maps.google.com/?q=Red Mall, Shalimar Link Road, Muslim Colony, Lahore, Punjab 56000, Pakistan"
                                >
                                    <h6 className={"footer-para align-text"}>
                                        <div className={"footer-icons"}>
                                            <MdLocationOn />
                                        </div>
                                        <span className={"d-block"}>
                      Office No. B-13, 2nd Floor Red Mall, Shalimar Link Road,
                      Lahore.
                    </span>
                                    </h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"bootom-footer container"}>
                    <p className={"bootom-footer-para"}>
                        Copyright <span className={"footer-span"}>&copy;</span> 2021 All
                        rights reserved |{" "}
                        <span className={"footer-span"}> Uncle Fixer Private LTD</span>
                    </p>
                </div>
            </div>
        </>
    );
};
export default Name;
