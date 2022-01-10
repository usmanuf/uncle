import React from 'react';
import './style.scss';

const Name = (props) =>{
    return(
        <div>
            <section className="pricing-table">

                <div className="card">
                    <h6 className="type">basic</h6>
                    <div className="price"><span>$</span>20</div>
                    <h5 className="plan">plan</h5>
                    <ul className="details">
                        <li>FREE Stickers</li>
                        <li>FREE Delivery</li>
                        <li>24/7 support</li>
                    </ul>
                    <div className="buy-button">
                        <h3 className="btn">subscribe</h3>
                    </div>
                </div>


            </section>
        </div>
    )
}
export default Name;
