import React from "react";
import './style.css';
import Img from '../../../assets/Images/job-hero-bg.jpg'
import Img1 from '../../../assets/Images/job-hero-bg-mobile.jpg';
import BreadCrumb from "../../Reuseable/BreadCrumb/breadCrumb";
import Jobs from './JobsPage/Jobs'
import Helmets from "../../Reuseable/Halmet";
const Job = () =>{
    return(<>
        <Helmets title={'Jobs - Uncle Fixer'} description={'Getting job is quite difficult for technicians but don’t need to panic, Uncle Fixer \n' +
        'provide you the best job opportunities to make your lives easier.'} keyword={'jobs in Pakistan, private jobs, private jobs in Pakistan, online jobs in Pakistan, online \n' +
        'jobs in Pakistan 2021, jobs in Lahore, jobs in Karachi, freelancing sites'}/>
<BreadCrumb title={'Jobs'} img={Img} Imgs={Img1}/>
<Jobs/>
    </>)

}
export default Job;
