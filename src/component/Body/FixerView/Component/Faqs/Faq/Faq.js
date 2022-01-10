import React from "react";
import "./style.css";
import FixersData from "./FaqData/FaqData";
import FaqCollapse from "./FaqCollapse/FaqCollapse";

function Faq() {
  return (
    <>
      <section >
        <div className="faq">
          {/* <Title className="service-title" title="FAQ's" /> */}
          <div className="fixers-heading mb-5">
            {/* <span className="flaticon-right-arrow"></span> */}
       
          </div>
          {FixersData.map((val,index) => {
            return <FaqCollapse index={index} minusicon="flaticon-minus" plusicon="flaticon-plus" title={val.title} text={val.text} />;
          })}

        
          {/* {CustomersData.map((val,index) => {
            return <FaqCollapse index={index} minusicon="flaticon-minus" plusicon="flaticon-plus" title={val.title} text={val.text} />;
          })}
         */}
        </div>
       
      </section>
    </>
  );
}

export default Faq;
