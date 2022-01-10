import React from "react";
import {Helmet} from "react-helmet";

const Helmets = ({title, description,keyword}) => {

        return (

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
                    <meta
                        name="description"
                        content="THIS IS CONTENT" />
                    <meta name="keywords" content={keyword} />
                    <link rel="canonical" href="http://unclefixer.com" />
                </Helmet>


        );
    }
export default Helmets;
