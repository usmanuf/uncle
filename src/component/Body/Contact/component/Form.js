import {Button, Grid, Typography} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles(theme =>({
    root : {
        display : "flex",
        flexDirection : "column",
        width : "80%",
        margin : "auto",
        maxWidth : "700px",
        [theme.breakpoints.down('sm')] : {
            width : "100%",
            margin : "1px",
        },
    },
    writtenContact : {
        display : "flex",
        flexDirection : "column",
        [theme.breakpoints.up('sm')] : {
            alignItems : "center",
            marginTop : "10px",
        },
    },
    border : {
        border : "none",
    },
    btnStyle : {
        color : "white",
        borderRadius : "20px",
        marginTop : "15px",
        width: '80%',
        margin: 'auto',
        background : "#1faf05",
        padding:"7px 12px"
    },
    fieldStyle : {
        margin : "10px",
        padding : "12px",
        background: "var(--bg-gray)",
        border: '1px solid var(--border)',
        borderRadius : "22px",
        outline : "none",
    },





}));



const Form = () => {

    const classes = useStyle();
    const {register, handleSubmit,formState: { errors }} = useForm();

    let history = useHistory();
    const [loading, setLoading] = useState(false);

    const onSubmit = data => {
        setLoading(true);
        console.log("some",data);
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('phone', data.phone);


        axios.post("https://unclefixer.co.uk/api/contact-store", formData).then(response => {
            console.log(response);
            setLoading(false);
            history.push("/thank-you")

        }).catch(error => {
            console.log(error.response.data.errors);

        })
    }

    return(<>

        <div className={"mb-3"}>
                    <form onSubmit={handleSubmit(onSubmit)} className = {classes.root}>

                        <input
                            {...register('name', {required: true})} maxLength='25'
                            title="Enter the UncleFixer ID Name" type="text" name="name"
                            placeholder="Enter Full Name"
                            className = {classes.fieldStyle}
                        />
                        {errors.name && errors.name.type === "required" &&
                        <span className="mx-2 input-errors">Name is required</span>}
                        <input
                            maxLength='11' minLength="11" {...register('phone', {required: true})} name="phone"
                            id="phone" type="tel" placeholder="0340 1122222"
                            className = {classes.fieldStyle}
                        />
                        {errors.phone && errors.phone.type === "required" &&
                        <span className="mx-2 input-errors">Phone No is required</span>}
                        <textarea
                            {...register('description', {required: true})} rows="3" name="description"
                            placeholder="Your Message"
                            rows = {5}
                            className = {classes.fieldStyle}
                        />
                        {errors.description && errors.description.type === "required" &&
                        <span className="mx-2 input-errors">Address is required</span>}
                        {/*<input  {...register('image', { required: true })} id="firstImage" type="file" className={classes.uploadIcon}/>*/}
                        {/*{errors.image && errors.image.type === "required" &&*/}
                        {/*<span className="input-errors">Image is required</span>}*/}
                        <button
                            disabled={loading} type="submit"

                            className = {classes.btnStyle}>Send Messege</button>
                    </form>


        </div>

    </>)
}
export default Form;
