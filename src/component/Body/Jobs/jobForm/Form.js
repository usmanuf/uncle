import React, {useEffect, useState} from 'react'
import { Container, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { FaUpload } from 'react-icons/fa'
import useStyle from './FormStyle'
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {URL_API} from "../../../../variables";

const Form = (props) => {
    console.log('props', props.location.data)
    const classes = useStyle();
    const Id = props?.location?.data;
    const {register, handleSubmit,reset,formState: { errors }} = useForm();
    const [selectedFile, setSelectedFile] = useState('');

    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [AboutUs, setaboutUs] = useState([{
      id: 1,
        name:'facebook'
    },{ id: 2,
        name:'Instagram'
    }, {id: 3,
        name:'Google'
    }, {id: 4,
        name:'TV ad'
    }, {id: 5,
        name:'Rikshaw'
    }, {id: 6,
        name:'other'
    },
    ]);
         const [experience, setExperience] = useState([
        {
          id:1,
            experience:'Fresh',
        },{
          id:2,
            experience:'Intermediate',
        },{
          id:3,
            experience:'1 year Experience',
        },{
          id:4,
            experience:'2 years Experience',
        },{
          id:5,
            experience:'3 years Experience',
        },{
          id:6,
            experience:'4 years Experience',
        },{
          id:7,
            experience:'5 years Experience',
        },{
          id:8,
            experience:'More than Five Year',
        },
    ]);

    const onSubmit = data => {
        setLoading(true);
        console.log("some",data);
        let formData = new FormData();

        const request = new XMLHttpRequest();
        const files = data;


        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('education', data.education);
        formData.append('experience', data.experience);
        formData.append('about_us', data.about_us);
        formData.append('job_id', Id? Id?.data : 1);
        formData.append('cv', data.cv[0]);

        axios.post(URL_API+"applyJob/applyJobs", formData).then(response => {
            console.log(response);
            setLoading(false);
            history.push("/thank-you")
            reset();
            // toast.success('Data submitted successfully', {autoClose: 3000})
        }).catch(error => {

            console.log(error.response.data.errors);
            setError(error.response.data.errors);
            history.push("/applyForm")
            // toast.error('Please fill form correctly', {autoClose: 3000})
        })
    }
console.log(selectedFile)
const handleImageUpload = (e) =>{
        console.log('e',e)
    setSelectedFile(e);
}
    function sayHello(id) {
        console.log("soddddme",id)

    }

    return (
        <div className={'formApply'}>

            <Container className={classes.backgroundColor}>

                <div className={classes.root}>


                <form onSubmit={handleSubmit(onSubmit)}   className={classes.form}>
                    <div className={classes.div1}>
                        <div className={classes.div2}>
                            <label htmlFor="firstImage" className={classes.imgLabel}><FaUpload/></label>
                            <input
                                accept="application/pdf"
                                type="file"
                                {...register('cv', {required: true})}
                                 name={'cv'} id="firstImage"
                                data-browse-on-zone-click="true"
                                className={classes.uploadIcon}
                            />
                        </div>
                    </div>

                    <div className="input-errors">{error}</div>
                    <Typography className={classes.marginBottom}>
                        Click here to upload your cv file<br/>
                        {errors.cv && errors.cv.type === "required" &&
                        <span className="input-errors">Your CV is required in pdf file.</span>}
                        <span className="input-errors">{error}</span>
                        <span>{selectedFile}</span>
                    </Typography>
                    <div className={'row'}>
                        <div className="mb-3 col-sm-12 col-md-6">

                            <input {...register('name', {required: true})} maxLength='25'
                                   title="Enter the Full Name" type="text" name="name"
                                   placeholder="Enter Your Name"
                                   className="myDIV focus:text-green-400  w-full px-3 py-2 placeholder-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>

                            {errors.name && errors.name.type === "required" &&
                            <span className="input-errors">Full Name is required</span>}
                        </div>
                        <div className="mb-3 col-sm-12 col-md-6">

                            <input {...register('email', {required: true})} maxLength='55'
                                   title="Enter the Email" type="text" name="email"
                                   placeholder="Enter Your Email"
                                   className="myDIV focus:text-green-400  w-full px-3 py-2 placeholder-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>

                            {errors.email && errors.email.type === "required" &&
                            <span className="input-errors">Email is required</span>}
                        </div>

                        <div className="w-full mb-3 col-sm-12 col-md-6">
                            <select {...register('about_us', {required: true})}
                                    className="selectOption myDIV focus:text-green-400 w-full px-3 py-1 placeholder-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    name="about_us"
                                    id="integration_city_id">
                                <option value="">Where Did You Hear About Us</option>
                                {AboutUs.map((val) => {
                                    return (
                                        <option key={val.id}  value={val.id}>
                                            {val.name}
                                        </option>
                                    );
                                })}
                            </select>

                            {errors.about_us && errors.about_us.type === "required" &&
                            <span className="input-errors">This field is required</span>}
                        </div>

                        <div className="mb-3 col-sm-12 col-md-6">

                            <input {...register('phone', {required: true})} maxLength='11'
                                   title="Enter the Phone" type="tel" name="phone"
                                   placeholder="Enter Your Phone"
                                   className="myDIV focus:text-green-400  w-full px-3 py-2 placeholder-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>

                            {errors.phone && errors.phone.type === "required" &&
                            <span className="input-errors">Phone is required</span>}
                        </div>
                        <div className="mb-3 col-sm-12 col-md-6">

                            <input {...register('education', {required: true})} maxLength='25'
                                   title="Enter the Phone" type="text" name="education"
                                   placeholder="BS(CS)"
                                   className="myDIV focus:text-green-400  w-full px-3 py-2 placeholder-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>


                            {errors.education && errors.education.type === "required" &&
                            <span className="input-errors">Education is required</span>}
                        </div>
                        <div className="w-full mb-3 col-sm-12 col-md-6">
                            <select {...register('experience', {required: true})}
                                    className="selectOption myDIV focus:text-green-400 w-full px-3 py-1 placeholder-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    name="experience"
                                    id="integration_city_id">
                                <option className={"optionJob"} value="">Enter Your Experience</option>
                                {experience.map((val) => {
                                    return (
                                        <option key={val.id}  value={val.id}>
                                            {val.experience}
                                        </option>
                                    );
                                })}
                            </select>

                            {errors.experience && errors.experience.type === "required" &&
                            <span className="input-errors">This field is required</span>}
                        </div>


                    <div className={'m-auto'}>
                        {/*<div>{error}</div>*/}
                        <button disabled={loading} type="submit"  className={classes.btnGrid} >Send Message</button>
                    </div>
                    </div>
                </form>
                </div>
            </Container>

        </div>
    )
}
export default Form;
