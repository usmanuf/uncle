import React from 'react';
import './style.css'
const Whatsapp = [
    {
        id: 1,
        title: "Lahore",
        url: "https://api.whatsapp.com/send?phone=+923096532565&amp;text=I'm%20interested%20to%20sell%20my%20car",

    },  {
        id: 2,
        title: "Karachi",
        url: "some",

    },  {
        id: 3,
        title: "Islamabad",
        url: "some",

    },  {
        id: 4,
        title: "Multan",
        url: "some",

    }, {
        id: 5,
        title: "Multan",
        url: "some",

    }, {
        id: 6,
        title: "Multan",
        url: "some",

    },
]
const Name = () =>{
    return(
        <>
            <div className={"container my-5"}>
                <h1 className={"heading-Title"}>
                  Get Your Feature Id Now!
                </h1>
                <div className={"bar"}/>
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
