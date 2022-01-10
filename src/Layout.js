import React, { Component } from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer'
import {links} from "./component/Appconstant";
import ScrollToTop from './scrolltoTop'
class Layout extends Component {
    render(){
        return(
            <div>
                <ScrollToTop/>
                <Navbar links={links}/>
                 {this.props.children}
                <Footer />
            </div>
        )
    }
}
export default Layout;
