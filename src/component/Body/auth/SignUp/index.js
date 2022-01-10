import React, { useEffect, useState } from 'react'
import './style.css';
import {Link, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import {URL_API} from "../../../variables";
import {Button, Modal} from "react-bootstrap";

import { useDispatch } from 'react-redux';
import {userLoggedIn} from "../../../actions/couter.action";

function Signup(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        setLoading(true);
        console.log("some", data);
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        axios.post(URL_API+"auth/customer/register", formData)
            .then((response) => {
                console.log('register',response);
                console.log('error',response.data.message.email[0])
                setLoading(false);
                setShow(true)
                history.push("/log-in");
                reset();

            })
            .catch((error) => {
                console.log('error',error.response);
            });
    };
    return (
        <div className='Login'>

            <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className={"theme"}>Thank You</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={'modelstyle'}>
                                <h3 className={"m-auto modelstext"}>Data submitted SuccessFully</h3>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className={"btnstyling"} variant="secondary" onClick={handleClose}>
                                    Close
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
                    <h4 className="modal-title">Register Your Account</h4>
                    <div className="form-group">
                        <input name="name"   {...register("name", {required: true})}
                               type="text" className="form-control" placeholder="Username"/>
                        {errors.name && errors.name.type === "required" && (
                            <span className="input-errors">Name is required</span>
                        )}
                    </div>
                    <div className="form-group">
                        <input name="email"   {...register("email", {required: true})}
                               type="text" className="form-control" placeholder="Username"/>
                        {errors.email && errors.email.type === "required" && (
                            <span className="input-errors">email is required</span>
                        )}
                    </div>
                    <div className="form-group">
                        <input name="password"    {...register("password", {required: true})}
                               type="password" className="form-control" placeholder="Password"/>
                        {errors.password && errors.password.type === "required" && (
                            <span className="input-errors">Password is required</span>
                        )}
                    </div>
                    <div className="form-group small clearfix">
                        <a href="#" className="forgot-link">Forgot Password?</a>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login"/>
                </form>
                <div className="text-center small">Don't have an account? <Link to={'/log-in'}>Login</Link></div>
            </div>

        </div>
    )
}
export default Signup;
