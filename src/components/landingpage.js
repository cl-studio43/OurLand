import React, { Component } from 'react'
import CoverVideo from "../videos/landing_page_video.mp4"
// import CoverVideo from "../videos/landingPage_video.mp4"
import Scrollchor from "react-scrollchor";
import Cover from 'react-video-cover';
import "./landingpage.css"

const style = {
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    zIndex: -1,
};

class LandingPage extends Component {

    render() {
        const videoOptions = {
            src: CoverVideo,
            autoPlay: true,
            muted: true,
            loop: true,
        };

        return (
            <div id='#top'>
                <div style={style} >
                    <Cover
                        videoOptions={videoOptions}
                        remeasureOnWindowResize
                    />
                    <div className="arrow animated bounceInDown">
                        <Scrollchor to="#livestream" className="btn" animate={{ duration: 500 }}>
                            <i className="fa fa-chevron-down" />
                        </Scrollchor>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage
