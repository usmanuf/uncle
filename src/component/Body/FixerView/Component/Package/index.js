import React from 'react';
import './style.css'
import {Link} from "react-router-dom";
const Package = () =>{
    return(
        <div className={'Packages'}>
            <div className="demo">
                <div className="container">
                    <div className={'my-4 headingCenter'}>
                        <div className={"heading-Title"}>
                            Featured Id Packages
                        </div>
                        <div className={"bar"}/>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 col-sm-12 p-3">
                            <div className="pricingTable">
                                <div className="pricingTable-header">
                                    <h3 className="title">Standard</h3>
                                    <div className="price-value">
                                        <span className="currency">Rs</span>
                                        <span className="amount">1000</span>
                                        <span className="duration">/month</span>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li><strong>1000</strong> Rupees</li>
                                    <li><strong>Get</strong> 1 Skill</li>
                                    {/*<li><strong>50GB</strong> Bandwidth</li>*/}
                                    {/*<li>Maintenance</li>*/}
                                    <li> You have the option to purchase one more skill of your choice</li>
                                </ul>
                                <div className="pricingTable-signup">
                                    <Link to={'/feature-form'}>Buy</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="pricingTable blue">
                                <div className="pricingTable-header">
                                    <h3 className="title">Premium</h3>
                                    <div className="price-value">
                                        <span className="currency">Rs</span>
                                        <span className="amount">1500</span>
                                        <span className="duration">/month</span>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li><strong>1500</strong> Rupees</li>
                                    <li><strong>Get</strong> 1 Skill</li>
                                    {/*<li><strong>50GB</strong> Bandwidth</li>*/}
                                    {/*<li>Maintenance</li>*/}
                                    <li> You have the option of purchasing two more skills of your choice</li>
                                </ul>
                                <div className="pricingTable-signup">
                                    <Link to={'/feature-form'}>Buy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Package;
