import React, { useEffect } from "react";
import "./style.css";
import Store from '../../../../../assets/Images/google-play-store.png';
import App from '../../../../../assets/Images/app-store.png';
const Carousel = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const playStore = () => {
        window.location =
            "https://play.google.com/store/apps/details?id=com.unclefixer";
    };
    const appStore = () => {
        window.location =
            "https://apps.apple.com/us/app/unclefixer/id1490258196?ls=1";
    };

    return (
        <div className={"Carousel"}>

            <div className={"carousel-header"}>
                <h1 className={"carousel-text1"}>
                    Why fix it <span className={"yourself-styles"}>yourself?</span>
                    <br></br>
                    Leave it on <span className={"unclefixer-styles"}>Uncle Fixer!</span>
                </h1>
                <p className={"carousel-text2"}>
                    Are you in trouble? Don’t get worried Uncle Fixer has the best
                    solutions. With Uncle Fixer, you can avoid the hassles of household
                    maintenance. You may be confident that you will receive high-quality,
                    honest service at a reasonable cost. Just download the Uncle Fixer
                    app, and we’ll do our best to accommodate you.
                </p>
                <h2 className={"carousel-text-download"}>
                    Download Uncle Fixer App Now
                </h2>
                <div className="Social-icon-styles">
                    <img
                        src={Store}
                        className=" Social-icon  img-fluid"
                        style={{ cursor: "pointer" }}
                        onClick={() => playStore()}
                        alt="playstore"

                    />
                    <img
                        src={App}
                        className=" Social-icon  img-fluid"
                        style={{ cursor: "pointer" }}
                        onClick={() => appStore()}
                        alt="appstore"

                    />
                </div>
            </div>
        </div>
    );
};
export default Carousel;
