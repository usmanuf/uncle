import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";
import { useHistory } from "react-router-dom";

const FormPricing = () => {
    const [service_id, setServices] = useState([]);
    const [city_id, setCity_id] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        const getServiesData = async () => {
            await fetch("https://unclefixer.co.uk/api/services")
                .then((responce) => responce.json())
                .then((data) => {
                    console.log("services data", data);
                    setServices(data);
                });
        };
        const getCityData = async () => {
            await fetch("https://unclefixer.co.uk/api/get-cities/167")
                .then((responce) => responce.json())
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
    const onSubmit = (data) => {
        setLoading(true);
        console.log("some", data);
        let formData = new FormData();
        formData.append("name", data.name);
        formData.append("address", data.address);
        formData.append("phone", data.phone);
        formData.append("city_id", data.city_id);
        formData.append("service_id", data.service_id);
        axios
            .post("https://unclefixer.co.uk/api/book/bookNow", formData)
            .then((response) => {
                console.log(response);
                setLoading(false);
                history.push("/thank-you");

            })
            .catch((error) => {
                console.log(error.response.data.errors);

            });
    };
    return (
        <div className={"Forms"}>
            <div className={"from-wrapper"}>
                <div className={"flex flex-column"}>
                    <div className={"Home-form-title text-center text-white"}>Book your Services</div>
                    <div className="bar m-auto mb-3"></div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className={""} id="form">
                        <div className={"form-field"}>
                            <input
                                className={"form-input"}
                                {...register("name", { required: true })}
                                maxLength="25"
                                title="Enter the UncleFixer ID Name"
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                            />
                            <div className="hide">
                                Please Enter Uncle Fixer Profile ID Name.
                            </div>
                            {errors.name && errors.name.type === "required" && (
                                <span className="input-errors">Name is required</span>
                            )}
                        </div>
                        <div className={"form-field"}>
                            <input
                                className={"form-input"}
                                minLength="11"
                                maxLength="11"
                                {...register("phone", {
                                    required: true,
                                    minLength: {
                                        value: 11,
                                        message: "Phone No must be minimums 11 characters",
                                    },
                                    maxLength: {
                                        value: 11,
                                        message: "Phone No must be maximums 11 characters",
                                    },
                                    pattern: {
                                        value: /^[0-9\b]+$/,
                                        message: "Sorry Phone Number is only Numeric characters",
                                    },
                                })}
                                name="phone"
                                id="phone"
                                type="number"
                                placeholder="0340 1122222"
                            />
                            <div className="hide">
                                Enter Your Uncle Fixer Profile ID Phone No.
                            </div>
                            {errors.phone && errors.phone.type === "required" && (
                                <span className="input-errors">Phone No is required</span>
                            )}
                            {errors.phone?.message && (
                                <span className="input-errors">{errors.phone?.message}</span>
                            )}
                        </div>
                        <div className={"select-field"}>
                            <select
                                {...register("service_id", { required: true })}
                                name="service_id"
                                id="integration_city_id"
                                className="selected-field"
                            >
                                <option className={"text-white"} value="">
                                    Select Services
                                </option>
                                {service_id.map((val) => {
                                    return (
                                        <option
                                            className={"text-white"}
                                            key={val.id}
                                            value={val.id}
                                        >
                                            {val.service_name}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="hide">Enter Your Uncle Fixer Service.</div>
                            {errors.service_id && errors.service_id.type === "required" && (
                                <span className="input-errors">Service is required</span>
                            )}
                        </div>
                        <div className={"select-field"}>
                            <select
                                {...register("city_id", { required: true })}
                                name="city_id"
                                id="integration_city_id"
                                className="selected-field"
                            >
                                <option value="">Select City</option>
                                {city_id.map((val) => {
                                    return (
                                        <option key={val.id} value={val.id}>
                                            {val.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="hide">Enter Your Uncle Fixer city.</div>
                            {errors.city_id && errors.city_id.type === "required" && (
                                <span className="input-errors">City is required</span>
                            )}
                        </div>

                        <div className={"form-field"}>
                            <input
                                className={"form-input"}
                                {...register("address", { required: true })}
                                name="address"
                                placeholder="Your Address"
                            />
                            {errors.address && errors.address.type === "required" && (
                                <span className="input-errors">Address is required</span>
                            )}
                        </div>
                        <div className={"btn-form"}>
                            <button
                                disabled={loading}
                                type="submit"
                                className={"btn-Home-form"} >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default FormPricing;
