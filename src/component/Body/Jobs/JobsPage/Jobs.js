

import React, {useEffect, useState} from 'react';
import { SingleCard } from './singleCard';
import Loaders from "../../../Reuseable/Loader/Loader";
import './App.css'
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import useStyle from './JobsStyle';
import ReactPaginate from 'react-paginate';
import Data from './JobApi';
import axios from "axios";
import {Link} from "react-router-dom";
// import Img from '../../../assests/Images/about-us.jpg';jpg
// import BreadCrumb from "../../BreadCrumb";
const theme=createMuiTheme({
    palette:{
        primary:{
            main:"#1faf05",
        }
    },
})

const Jobs = () =>{
    const HandleChange = (e) =>{
        console.log('e', e.target.value)
    }
    const classes = useStyle();
    const [users, setUsers] = React.useState(Data.slice(0, 50));
    const [pageNumber, setPageNumber] = React.useState(0);
    const usersPerPage = 1;
    const pagesVisited = pageNumber * usersPerPage;
    const[job,setJob]=useState([]);
    useEffect(() => {
        const getServiesData = () => {
            axios.get('https://unclefixer.co.uk/api/job/jobs').then((responce) => {
                console.log('response job',responce.data.data)
                setJob(responce.data.data)

            })
                .catch(error => console.error(`Error: ${error}`));
        };
        getServiesData();
    }, []);

    const displayUsers = Data.slice(pagesVisited, pagesVisited + usersPerPage).map((user, index)=>{
        return(
            <>
                {job?.data?.map((data, key) => (<Link className="linkServices" to={'jobDetails/'+ data.slug} key={key}>
                        <SingleCard
                titleHeading={data.name}
                jobDiscription = {data.description}
                numberVacancies = {data.no_of_vacancies}
                Date = {data.job_apply_date}
                cities={data.city}
                id={data.id}/>

                </Link>
                    ))}
                </>
        );
    })

    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }
    return(<>
    <div className={'bgJobs mt-5'}>

        <div className={classes.background}>
            <div className={classes.jobSPageHeading}>
                <span>Careers @ </span><span className={classes.themeColor}>Uncle Fixer</span>
                <div className='bar m-auto'></div>
            </div>
            <div>
                {displayUsers}
            </div>
            {job?.last_page > 1 && <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />}
        </div>


       </div>
    </>)
}
export default Jobs;
