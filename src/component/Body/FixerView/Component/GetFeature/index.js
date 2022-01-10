import React from 'react';
import './style.css'
const Whatsapp = [
    {
        id: 1,
        title: "Lahore",
        url: "https://api.whatsapp.com/send?phone=+9203011400200&amp;text=WellCome%20to%20Uncle%20Fixer%20",

    },  {
        id: 2,
        title: "Karachi",
        url: "https://api.whatsapp.com/send?phone=+9203011400200&amp;text=WellCome%20to%20Uncle%20Fixer%20",

    },  {
        id: 3,
        title: "Islamabad",
        url: "https://api.whatsapp.com/send?phone=+9203011400200&amp;text=WellCome%20to%20Uncle%20Fixer%20",

    },
]
const Name = () =>{
    return(
        <>
            <div className={"container my-5"}>
                <div className={'headingCenter'}>
                    <h1 className={"heading-Title"}>
                        Get Your Feature Id Now!
                    </h1>
                    <div className={"bar"}/>
                </div>

                <div className={"row my-3"}>
                        {Whatsapp.map((data => (
                            <div className={"col-md-4 col-sm-12"}>
                                <a
                                    href={data.url}
                                    target="_blank"
                                    className="linkWhatsapp"
                                >
                                    <div className={'textFeatureId'}>{data.title} WhatsApp</div>
                                </a>
                            </div>

                        )))}
                </div>
            </div>
        </>
    )
}
export default Name;
