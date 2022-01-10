import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import axios from "axios";
import './style.css';
import { useHistory } from "react-router-dom";

// toast.configure()
// URL_API + 'service-cities/cities'
const FormPricing = () => {
    const [service_id, setServices] = useState([]);
    const [city_id, setCity_id] = useState([]);
    const {register, handleSubmit,formState: { errors }} = useForm();


    useEffect(() => {
        const getServiesData = async () => {
            await fetch('https://unclefixer.co.uk/api/services').then((responce) => responce.json())
                .then((data) => {
                    console.log("services data", data);
                    setServices(data);

                });
        };
        const getCityData = async () => {
            await fetch('https://unclefixer.co.uk/api/get-cities/167').then((responce) => responce.json())
                .then((data) => {
                    console.log("cities data", data);
                    setCity_id(data);

                });
        };
        getServiesData();
        getCityData();
    }, []);


    let history = useHistory();
    const [loading, setLoading] = useState(false);

    const onSubmit = data => {
        setLoading(true);
        console.log("some",data);
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('phone', data.phone);
        formData.append('city_id', data.city_id);
        formData.append('service_id', data.service_id);

        axios.post("https://unclefixer.co.uk/api/book/bookNow", formData).then(response => {
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
    return(


            <div className="BookNowForm">

                <div className="bg-white formBooknow mx-3  shadow-xl">
                    <div>
                        <h1 className="heading-Title headingBookNow">Book Your Services</h1>

                        <div className={"bar m-auto"}/>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={""}>
                        <div className="mb-1">
                            <label htmlFor="name" className="labelbookNow">Full Name</label>
                            <input {...register('name', {required: true})} maxLength='25'
                                   title="Enter the UncleFixer ID Name" type="text" name="name"
                                   placeholder="Enter Your Name"
                                   className="inputBookNow"/>
                            <div className="hide">Please Enter Full Name.</div>
                            {errors.name && errors.name.type === "required" &&
                            <span className="input-errors">Your Full Name is required</span>}
                        </div>
                        <div className="mb-1">
                            <label htmlFor="phone" className="labelbookNow">Phone
                                Number</label>

                            <input maxLength='11' minLength="11" {...register('phone', {required: true})} name="phone"
                                   id="phone" type="tel" placeholder="0340-1122222"
                                   className="inputBookNow"/>

                            <div className="hide">Enter Your Phone No.</div>
                            {errors.phone && errors.phone.type === "required" &&
                            <span className="input-errors">Phone is required</span>}
                        </div>

                        <div class="w-full mb-1">
                            <label className="labelbookNow">Select Services</label>
                            <select {...register('service_id', {required: true})} className="inputBookNow selectBookNow"
                                    name="service_id"
                                    id="integration_city_id">
                                <option  className={'w-full'} value="">Select Services</option>

                                {service_id.map((val) => {
                                    return (
                                        <option key={val.id}  value={val.id}>
                                            {val.service_name}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="hide">Enter Your Service.</div>
                            {errors.service_id && errors.service_id.type === "required" &&
                            <span className="input-errors">Service is required</span>}
                        </div>
                        <div class="w-full mb-1">
                            <label className="labelbookNow">Select City</label>
                            <select {...register('city_id', {required: true})} class="inputBookNow selectBookNow"
                                    name="city_id"
                                    id="integration_city_id">
                                <option className={'w-full'} value="">Select City</option>
                                {city_id.map((val) => {
                                    return (
                                        <option key={val.id}  value={val.id}>
                                            {val.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="hide">Enter Your city.</div>
                            {errors.city_id && errors.city_id.type === "required" &&
                            <span className="input-errors">City is required</span>}
                        </div>


                        <div className="mb-1">
                            <label htmlFor="message" maxLength='100'
                                   className="block mb-1 labelbookNow">Address</label>
                            <textarea {...register('address', {required: true})} rows="4" name="address"
                                      placeholder="Your Address"
                                      className="bookNowTextArea"></textarea>
                            {errors.address && errors.address.type === "required" &&
                            <span className="input-errors">Address is required</span>}
                        </div>
                        <div className="mb-6">
                            <button disabled={loading} type="submit"
                                    className="BookNowbtn mt-3">Book Now
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <Link to="/" className="text-sm textBooknow text-center hover:text-red-500 text-gray-400 text-underline"> Back to Home
                        </Link></div>
                </div>
                    </div>





     )
}
export default FormPricing;
