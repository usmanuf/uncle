import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import axios from "axios";

import '../style.css';
import { useHistory } from "react-router-dom";

// toast.configure()
const FormPricing = () => {
    const {register, handleSubmit,formState: { errors }} = useForm();

    let history = useHistory();
    const [loading, setLoading] = useState(false);

    const onSubmit = data => {
        setLoading(true);
        console.log("some",data);
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('city', 'Lahore');
        formData.append('description', data.description);

        axios.post("https://unclefixer.co.uk/api/featuredEmail", formData).then(response => {
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
        <div class="flex pt-5 items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div class="container mt-3 mx-auto">
                <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div class="text-center">
                        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Feature ID Package Form</h1>
                        <p class="text-gray-400 text-center dark:text-gray-400">Fill up the form below to send us a message.</p>
                    </div>
                    <div class="m-7">
                        <form onSubmit={handleSubmit(onSubmit)}  id="form">
                            <div class="mb-3">
                                <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                <input {...register('name', { required: true })} maxLength='25' title="Enter the UncleFixer ID Name" type="text" name="name" placeholder="Enter Your Name" class="myDIV focus:text-green-400  w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                <div class="hide">Please Enter Uncle Fixer Profile ID Name.</div>
                                {errors.name && errors.name.type === "required" &&
                                <span className="input-errors">Name is required</span>}
                            </div>
                            <div class="mb-3">
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input {...register('email',  {required: true, pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }})} type="text" name="email" id="email" placeholder="unclefixer@gmail.com" class=" myDIV focus:text-green-400 w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                <div class="hide">Enter UncleFixer Profile ID E-mail.</div>
                                {errors.email && errors.email.type === "required" &&
                                <span className="input-errors">E-mail is required</span>}
                                {errors.email?.message && <span className="input-errors">{errors.email?.message}</span>}

                            </div>
                            <div class="mb-3">
                                <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>

                                        <input   maxLength='11' minLength="11" {...register('phone',{required: true,
                                            minLength: {
                                                value: 11,
                                                message: "Phone No must be minimums 11 characters"
                                            },
                                            maxLength: {
                                                value: 11,
                                                message: "Phone No must be maximums 11 characters"
                                            },
                                            pattern: {
                                                value:/^[0-9\b]+$/,
                                                message:
                                                    "Sorry Phone Number is only Numeric characters"
                                            }
                                        })} name="phone" id="phone" type="tel" placeholder="0340 1122222"  class="myDIV focus:text-green-400 w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />

                                <div class="hide">Enter Your Uncle Fixer Profile ID Phone No.</div>
                                {errors.phone && errors.phone.type === "required" &&
                                <span className="input-errors">Phone No is required</span>}
                                {errors.phone?.message && <span className="input-errors">{errors.phone?.message}</span>}

                            </div>
                            <div class="mb-3">
                                <label for="message" maxLength='200' class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>
                                <textarea {...register('description', { required: true })} rows="5" name="description" placeholder="Your Message" class="myDIV focus:text-green-400 w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" ></textarea>
                                {errors.description && errors.description.type === "required" &&
                                <span className="input-errors">Message is required</span>}
                            </div>
                            <div class="mb-6">
                                <button disabled={loading} type="submit"  className="w-full px-3 py-3 text-white theme rounded-md">Send Message</button>
                            </div>
                        </form>
                        <div className="text-center">
                        <Link to="/become-a-fixer/" className="text-sm text-center hover:text-red-500 text-gray-400 text-underline"> Back to Pakages
                        </Link></div>
                    </div>
                </div>
            </div>
        </div>

)
}
export default FormPricing;
