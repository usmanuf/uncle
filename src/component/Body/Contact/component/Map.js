import React from "react";
import GoogleMapReact from 'google-map-react';
import Img from '../../../../assets/Images/location-map.png'
const AnyReactComponent = ({ text }) => <img src={text} alt={'Map'} width={'34'} className={'textMap'}/>

export default function SimpleMap(){
    const defaultProps = {
        center: {
            lat: 31.5789164,
            lng: 74.3792919
        },
        zoom: 16
    };

    return (
        <div style={{ height: '40vh', width: '100%' ,border: '2px solid var(--border)' }}>
            <a target={'-blank'} href={'https://www.google.com/maps/place/Red+Mall/@31.5789118,74.3792972,17z/data=!3m1!4b1!4m5!3m4!1s0x39191ac7e2b10bc7:0xd09063cfd71a8fa9!8m2!3d31.5789118!4d74.3814859'}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBWJbK0jw6DsmdF0jTWz1FDMWESHJXW5wk"}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={31.5789164}
                    lng={74.3792919}
                    text={Img}
                />
            </GoogleMapReact>
            </a>
        </div>
    );
}
