import React from 'react';
// import Loader from "react-loader-spinner";
import './style.css'
import Logo from '../../../../src/assets/Loader/loader.gif'
const Loaders = () => {
    //other logic

        return (
            <>
                <div id="loader-wrapper">
                <div className={'imgLoader'}>
                    <img src={Logo} alt={'/'}/>
                </div>
                </div>
       </> );
    }
export default Loaders;

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
