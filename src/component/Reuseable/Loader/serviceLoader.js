import React from 'react';
// import Loader from "react-loader-spinner";
import './style.css'
import Logo from '../../../../src/assets/Loader/loader.gif'
const ServiceLoader = () => {
    //other logic

    return (
        <>
            <div className="loader">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </> );
}
export default ServiceLoader;

// import { WifiLoader } from "react-awesome-loaders";
//
// const Loaders = () => {
//     return (
//         <>
//             <WifiLoader
//                 background={"transparent"}
//                 desktopSize={"120px"}
//                 mobileSize={"100px"}
//                 text={"Network Issues"}
//                 backColor="#E8F2FC"
//                 frontColor="var(--theme-color)"
//             />
//         </>
//     );
// };
// export default Loaders;
