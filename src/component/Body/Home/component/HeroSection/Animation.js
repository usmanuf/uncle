import React from "react";
import './style.css';
import { IconContext } from "react-icons";
import { FaBlogger as Blogger } from "react-icons/fa";
import { FaChrome as Chrome } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaLinux as Linux } from "react-icons/fa";
import { FaXbox as Xbox } from "react-icons/fa";
import { FaMailchimp as Mailchimp } from "react-icons/fa";
import { FaApple as Apple } from "react-icons/fa";
import { FaGoogle as Google } from "react-icons/fa";
import { FaReact as ReactLogo } from "react-icons/fa";
import { FaAndroid as Android } from "react-icons/fa";
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { FaTwitter as Twitter } from "react-icons/fa";
import { FaGithub as Github } from "react-icons/fa";
import { FaWindows as Window } from "react-icons/fa";
import { FaCss3Alt as CSS } from "react-icons/fa";
import { FaFontAwesome as FontAwesome } from "react-icons/fa";
import { FaDocker as Docker } from "react-icons/fa";
import { FaRedditAlien as Reddit } from "react-icons/fa";
import { FaFigma as Figma } from "react-icons/fa";
import { FaFirefoxBrowser as Firefox } from "react-icons/fa";
import Carousel from "../Review/Component/Carousel";


const logos = [
    { id: 1, logo: <Blogger /> },
    { id: 2, logo: <Chrome /> },
    { id: 3, logo: <Linkedin /> },
    { id: 4, logo: <Linux /> },
    { id: 5, logo: <Xbox /> },
    { id: 6, logo: <Mailchimp /> },
    { id: 7, logo: <Apple /> },
    { id: 8, logo: <Google /> },
    { id: 9, logo: <ReactLogo /> },
    { id: 10, logo: <Android /> },
    { id: 11, logo: <Facebook /> },
    { id: 12, logo: <Twitter /> },
    { id: 13, logo: <Github /> },
    { id: 14, logo: <Window /> },
    { id: 15, logo: <CSS /> },
    { id: 16, logo: <FontAwesome /> },
    { id: 17, logo: <Docker /> },
    { id: 18, logo: <Reddit /> },
    { id: 19, logo: <Figma /> },
    { id: 20, logo: <Firefox /> }
];

const repeat = Array.from({ length: 2 });
const rows = Array.from({ length: 20 });

const App = () => {
    return (
        <div className={''}>
        <IconContext.Provider value={{ className: "logos" }}>
            <div className={'sections'}>
                {rows.map((a, ind) => (
                    <div className="row" key={ind}>
                        {repeat.map((b, i) => (
                            <div key={i} className="div">
                                {logos.map((item, index) => {
                                    const { id, logo } = item;
                                    return <React.Fragment key={id}>{logo}</React.Fragment>;
                                })}
                            </div>
                        ))}
                    </div>
                ))}

            </div>

        </IconContext.Provider>
        </div>
    );
};

export default App;
