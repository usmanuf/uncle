import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useHistory } from "react-router-dom";
import './style.css';
import {URL_API} from "../../../variables";
const User =() =>{

        const [Skill, setSkill] = useState([
            {
                id:0,
                name: "Which Kind of Skill you Have اپ کون سا کام کرنا چاھتے ہیں"
            },
            {
                id:1,
                name: "Which Kind of Service you Want اپ کون سا کام کروانا چاھتے ہیں"
            },
        ]);
        const [Skills, setSkills] = useState([
            {
                id:0,
                name: "Electrician service"
            }, {
                id:0,
                name: "AC service"
            }, {
                id:0,
                name: "Plumber service"
            }, {
                id:0,
                name: " CCTV service"
            }, {
                id:0,
                name: "Carpenter service"
            }, {
                id:0,
                name: "Quran Tutor service"
            }, {
                id:0,
                name: "Solar Installation service"
            }, {
                id:0,
                name: "  Car Wash service"
            }, {
                id:0,
                name: "Cleaning service"
            },
{
                id:0,
                name: "Other"
            },




        ]);
        const [city_id, setCity_id] = useState([
            {
                id:1,
                name: "lahore"
            },
            {
                id:2,
                name: "Karachi"
            },
            {
                id:3,
                name: "Multan"
            },
            {
                id:4,
                name: "Islamabad,Rawalpindi"
            },
            {
                id:5,
                name: "Fasilabad"
            }, {
                id:6,
                name: "Other"
            },
        ]);
        const {register, handleSubmit,formState: { errors }} = useForm();





        let history = useHistory();
        const [loading, setLoading] = useState(false);

        const onSubmit = data => {
            setLoading(true);
            console.log("some",data);
            let formData = new FormData();
            formData.append('name', data.name);
            formData.append('area', data.area);
            formData.append('user', data.user);
            formData.append('phone_number', data.phone_number);
            formData.append('city', data.city);
            formData.append('skill', data.skill);

            axios.post(URL_API+ "onlineTaskData/store", formData).then(response => {
                console.log(response);
                setLoading(false);
                history.push("/thank-you")
                // toast.success('Data submitted successfully', {autoClose: 3000})
            }).catch(error => {
                console.log(error.response.data.errors);
                // setError('Fields are already beem taken')
                // toast.error('Please fill form correctly', {autoClose: 3000})
            })
        }

        return(<div className={'UserForm'}>
        <div className="form-bg m-9">
            <div className="container">
                <div className="row">
                    <div className=" col-sm-12">
                        <div className="form-container">
                            <h3 className="title">Submission Your Query</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                                <div className="form-group">
                                    <label>User Name*</label>
                                    <input
                                        {...register('name', {required: true})} maxLength='25'
                                        title="Enter the UncleFixer ID Name" type="text" name="name"
                                        placeholder="Enter Your Name"
                                        className="form-control"/>
                                    {errors.name && errors.name.type === "required" &&
                                    <span className="input-errors">Your Full Name is required</span>}
                                </div>
                                <div className="form-group phone-no">
                                    <label>Phone No*</label>
                                    <input  maxLength='11' minLength="11" {...register('phone_number', {required: true})} name="phone_number"
                                        id="phone" type="tel" placeholder="03401122222"
                                        className="form-control" />
                                    {errors.phone_number && errors.phone_number.type === "required" &&
                                    <span className="input-errors">Phone is required</span>}
                                </div>
                                <div className="form-group">
                                    <label>City*</label>
                                    <input {...register('city', {required: true})} maxLength='25'
                                           title="Enter the UncleFixer ID Name" type="text" name="city"
                                           placeholder="Enter your city"
                                           className="form-control" />
                                    {errors.city && errors.city.type === "required" &&
                                    <span className="input-errors">Your City is required</span>}
                                </div>

                                <div className="form-group">
                                    <label>Area*</label>
                                    <input {...register('area', {required: true})} maxLength='25'
                                           title="Enter the UncleFixer ID Name" type="text" name="area"
                                           placeholder="Enter your Address"
                                           className="form-control"/>
                                    {errors.area && errors.area.type === "required" &&
                                    <span className="input-errors">Your Address is required</span>}
                                </div>

                                <h4 className="sub-title">Query Information</h4>
                                <div className="form-group phone-no">
                                    <label>Are You *</label>
                                    <select className="form-control"
                                            {...register('user', {required: true})}
                                            name="user"
                                            id="integration_city_id">
                                        <option className={'w-full'} value="">fixer / Customer </option>
                                        {Skill.map((val) => {
                                            return (
                                                <option key={val.id} value={val.name}>
                                                    {val.name}
                                                </option>
                                            );
                                        })}
                                    </select>

                                    {errors.user && errors.user.type === "required" &&
                                    <span className="input-errors">User is required</span>}

                                </div>
                                <div className="form-group age">
                                    <label>Skill*</label>
                                    <select className="form-control"
                                            {...register('skill', {required: true})}
                                            name="skill"
                                            id="integration_city_id">
                                        <option className={'w-full'} value="">Select Skill </option>
                                        {Skills.map((val) => {
                                            return (
                                                <option key={val.id} value={val.name}>
                                                    {val.name}
                                                </option>
                                            );
                                        })}
                                    </select>

                                    {errors.skill && errors.skill.type === "required" &&
                                    <span className="input-errors">Skill is required</span>}
                                </div>
                                <button disabled={loading} type="submit" className="btn signin">Send Message</button>
                                <span className="user-login">If You Want Visit Our Website? Click Here <Link
                                    to={'/'}>UncleFixer</Link></span>
                            </form>
                            <div className="social-links">
                                <span>Or Connect With</span>
                                <a href="https://api.whatsapp.com/send?phone=+9203011400200&amp;text=WellCome%20to%20Uncle%20Fixer%20"><i className="fab fa-whatsapp"></i> Whatsapp</a>
                                <a href="tel:03401122222"><i className="fad fa-phone"></i> Mobile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default User;
