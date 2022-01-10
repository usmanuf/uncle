import React from 'react';
import YouTube from "@u-wave/react-youtube";
import './style.css'
const Videos = [
    {
        id:'1',
        url:"FLd2BLAd4LQ",

    },
    {
        id:'2',
        url:"O322LrXwXI",

    },{
        id:'3',
        url:"kYg02yNXQWA",

    },{
        id:'4',
        url:"ZfnZqx37sQk",

    },{
        id:'5',
        url:"iO322LrXwXI",

    },{
        id:'6',
        url:"Z7JozfPbfys",

    },{
        id:'7',
        url:"udeaOsBvmNM",

    },{
        id:'8',
        url:"xHtdf3eRjPg",

    },
]

const Video = () =>{
    return(
        <>
            <div className={"row"}>

                    {
                        Videos.map((data => (<div className={"col-md-6 col-sm-12 videos"}>
                            <YouTube className={"video-main"} video={data.url}  />
                        </div>  )))
                    }
            </div>

            </>
    )

}
export default Video;
