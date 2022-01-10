import React, {useContext, useEffect, useState} from 'react'
import './style.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {URL_API} from "../../../variables";
import {useForm} from "react-hook-form";
import {Modal} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import {userLoggedIn} from "../../../actions/couter.action";

function Login(props) {

    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
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
        formData.append('email', data.email);
        formData.append('password', data.password);
        axios.post(URL_API+"auth/customer/login", formData)
            .then((response) => {
                if (response.data.status === 200) {
                    setLoading(false);
                    setShow(true)
                    localStorage.setItem('user_token', response.data.access_token);
                    history.push('/')
                    reset();
                    dispatch(userLoggedIn());
                } else {
                    setError(response.data.message)
                    console.log('error', response.data.message)
                    setShow(true)
                    history.push('/log-in')
                }
            })
            .catch((error) => {
                console.log(error.response.data.errors);
            });
    };
    return (
        <div className='Login'>
    <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className={"theme"}>Login Your Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={'modelstyle'}>
                        <h3 className={"m-auto modelstext"}>{error}</h3>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className={"btnstyling"} variant="secondary" onClick={handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
            <h4 className="modal-title">Login to Your Account</h4>
            <div className="form-group">
                <input name="email"   {...register("email", { required: true })}
                         type="text" className="form-control" placeholder="Username"/>
                {errors.email && errors.email.type === "required" && (
                    <span className="input-errors">email is required</span>
                )}
            </div>
            <div className="form-group">
                <input  name="password"    {...register("password", { required: true })}
                        type="password" className="form-control" placeholder="Password" />
                {errors.password && errors.password.type === "required" && (
                    <span className="input-errors">Password is required</span>
                )}
            </div>
            <div className="form-group small clearfix">
                <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
            <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login"/>
        </form>
        <div className="text-center small">Don't have an account? <Link to={'/sign-up'}>Sign up</Link></div>
        <div className="text-center small">Don't have an account? <Link to={'/log-out'}>Log out</Link></div>
    </div>

        </div>
    )
}
export default Login;
