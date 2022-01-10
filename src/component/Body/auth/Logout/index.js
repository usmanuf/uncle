import React, {useState, useEffect, useContext} from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {userLoggedOut} from "../../../actions/couter.action";
import {URL_API} from "../../../variables";

// toast.configure()

const Logout = () => {

    const dispatch = useDispatch();
    // const {state, dispatch} = useContext(UserContext)
    const history = useHistory();
    const [user, setUser] = useState([]);

    useEffect(() => {
        logoutUser();
    }, []);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('user_token'),
        }
    }

    const logoutUser = () => {
        axios.get(URL_API + 'auth/customer/logout', config).then(response => {

            if (response.data.status === 200) {
                dispatch({type:"USER",payload:false})
                localStorage.setItem('user_token', "");
                history.push('/login')
                // toast.success('logout Successfully' , {position: toast.POSITION.BOTTOM_RIGHT ,autoClose:2000 } );
                dispatch(userLoggedOut());

            } else {


                // history.push('/')
            }
            // setUser(response.data.user);
        })
    }


    if (user) {
        return (
            <h3>WELCOME USER </h3>
        )
    }
    return (
        <h3>You are not logged in </h3>
    )


}
export default Logout;
