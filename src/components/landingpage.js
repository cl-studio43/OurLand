import React, { Component } from 'react'
import CoverVideo from "../videos/landing_page_video.mp4"
// import CoverVideo from "../videos/landingPage_video.mp4"
import Scrollchor from "react-scrollchor";
import Cover from 'react-video-cover';
import ScrollchorItem from "./scrollchor-item";
import Scrollspy from "react-scrollspy";
import "./landingpage.css"
import titleIcon from "../images/titleIcon.png"
import liveIcon from "../images/liveIcon.png"

const style = {
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    zIndex: -1,
};

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasScrolledDown: false,
            isOpen: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        const bodyScrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        let scrolledDownEnough = bodyScrollTop > 75 ? true : false;
        this.setState({
            hasScrolledDown: scrolledDownEnough
        });
    }

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
                    <div className="title">
                        <img src={titleIcon} alt="尋找深海黑煙囪" />
                    </div>
                    <div className="news">
                        {this.props.programNews}
                    </div>
                    <div className="arrow animated bounceInDown">
                        <Scrollchor to="#livestream" className="btn" animate={{ duration: 500 }}>
                        <img src={liveIcon} alt="尋找深海黑煙囪" />
                        </Scrollchor>
                    </div>
                    <div className="menu">
                        <Scrollspy
                            items={["about", "gps_timetable", "livestream", "videolist", "oceanwiki", "guesscard"]}
                            currentClassName="active"
                            className={` ml-auto navbar-nav`}
                            style={{padding:"0 15px"}}
                            navbar
                        >
                            <div onClick={this.handleCloseCollapse}>
                                <ScrollchorItem to="#about" className="nav-link">
                                    企劃主題
                                </ScrollchorItem>
                            </div>
                            <div onClick={this.handleCloseCollapse}>
                                <ScrollchorItem to="#gps_timetable" className="nav-link">
                                    GPS / 節目表
                                </ScrollchorItem>
                            </div>
                            <div onClick={this.handleCloseCollapse}>
                                <ScrollchorItem to="#livestream" className="nav-link">
                                    直播
                                </ScrollchorItem>
                            </div>
                            <div onClick={this.handleCloseCollapse}>
                                <ScrollchorItem to="#videolist" className="nav-link">
                                    深海筆記
                                </ScrollchorItem>
                            </div>
                            <div onClick={this.handleCloseCollapse}>
                                <ScrollchorItem to="#oceanwiki" className="nav-link">
                                    科普小知識
                                </ScrollchorItem>
                            </div>
                            <div onClick={this.handleCloseCollapse}>
                                <ScrollchorItem to="#guesscard" className="nav-link">
                                    我是誰
                                </ScrollchorItem>
                            </div>
                        </Scrollspy>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage
