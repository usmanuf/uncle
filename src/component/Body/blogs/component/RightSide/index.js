import React from 'react';
import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import YouTube from "@u-wave/react-youtube";




const RightSide = () => {

  const data = [
    {
      id: 1,
      img: 'https://picsum.photos/100/80',
      description: 'Contribute to neptunian/react-photo gallery development by creating an account.'
    },
    {
      id: 2,
      img: 'https://picsum.photos/100/80',
      description: 'Contribute to neptunian/react-photo gallery development by creating an account.'
    },
    {
      id: 3,
      img: 'https://picsum.photos/100/80',
      description: 'Contribute to neptunian/react-photo gallery development by creating an account.'
    },
    {
      id: 4,
      img: 'https://picsum.photos/100/80',
      description: 'Contribute to neptunian/react-photo gallery development by creating an account.'
    },
    {
      id: 5,
      img: 'https://picsum.photos/100/80',
      description: 'Contribute to neptunian/react-photo gallery development by creating an account.'
    },
    {
      id: 6,
      img: 'https://picsum.photos/100/80',
      description: 'Contribute to neptunian/react-photo gallery development by creating an account.'
    },

  ]

  return (
    <div className="">
          <div className="d-grid gap-2">
            <button className="btn button button1" type="button" > <span style={{ fontSize: 23, fontWeight: 'bold' }}> Post Ads </span> </button>

            <div className="social">

              <div className='socialTitle'>

                <div className="socialplug"> <span style={{ fontSize: 25, fontWeight: 'bold' }}> Social Plugin </span> </div>

              </div>

              <div className=' iconView'>
                <div>
                  <a href="#" class="fa fa-facebook"></a>
                </div>
                <div>
                  <a href="#" class="fa fa-twitter"></a>
                </div>
                <div>
                  <a href="#" class="fa fa-linkedin"></a>
                </div>
                <div>
                  <a href="#" class="fa fa-reddit"></a>
                </div>
                <div>
                  <a href="#" class="fa fa-pinterest"></a>
                </div>
              </div>
              <div className='iconView'>
                <div>
                  <a href="#" class="fa fa-vimeo"></a>
                </div>
                <div>
                  <a href="#" class="fa fa-instagram"></a>
                </div>
                <div>
                  <a href="#" class="fa fa-youtube"></a>
                </div>
                <div>
                  <a href="#" class="fa fa-android"></a>
                </div>
                <div>
                  <a href="#" class="fa fa-rss"></a>
                </div>
              </div>

            </div>

            <div className="popular">

              <div className='popularTitle'>

                <div className="popularPlug"> <span style={{ fontSize: 25, fontWeight: 'bold' }}> Popular Posts </span> </div>

              </div>

              <div className="scroll"> 
                {data.map(({ id, img, description }) => (
                  <div className='item'>

                    <div className="imgView">
                      <img className="img" key={id} src={img} />
                    </div>
                    <div className="description">{description}</div>

                  </div>
                ))}
              </div>


            </div>

            <div className="subcribe">

              <div className='subcribeTitle'>
                <div className="subcribeplug"> <span style={{ fontSize: 25, fontWeight: 'bold' }}> Subcribe Us </span> </div>
              </div>

              <div>
                <YouTube className="vedio" video="xHtdf3eRjPg" autoplay />
              </div>
            </div>

            <div>
              <img className="col-12 lastImg" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
            </div>


          </div>
        </div>
  );
}

export default RightSide;
