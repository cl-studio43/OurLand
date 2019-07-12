import React, { Component } from 'react'
import './guesscard.css'
import { Modal } from "antd"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default class GuessCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: 0,
            visible: false,
        };
    }

    toggleModal = (index) => {
        this.setState({
            visible: true,
            currentModal: index,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <section id="guesscard" className="section guesscard">
                    <h2 className="text-center">猜猜我是誰</h2>
                    <div className="info">
                    <h5 className="keyWords">為了生存，深海生物們個個具有獨特生存本事。 </h5>
                    <p className="contents">
                        食物稀少，得靠利齒大嘴，才能一口吞食獵物；為了適應高壓，或增加覓食優勢，演化成體型巨大；
                    </p>
                    <p className="contents">
                    暗不見光，所以眼睛特化、嗅覺敏銳；為引誘獵物、迷惑敵人，發光也能是利器。
                    </p>
                    </div>
                    
                   
                    <div className="section-content">
                        <div className="slider">
                            <Slider {...settings}>
                                <div className="card">
                                    <img 
                                    src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" 
                                    alt="" 
                                    onClick={() => this.toggleModal(1)}
                                    />
                                </div>
                                <div className="card">
                                    <img 
                                    src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" 
                                    alt="" 
                                    onClick={() => this.toggleModal(2)}
                                    />
                                </div>
                                <div className="card">
                                    <img 
                                    src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" 
                                    alt="" 
                                    onClick={() => this.toggleModal(3)}
                                    />
                                </div>
                                <div className="card">
                                    <img 
                                    src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" 
                                    alt="" 
                                    onClick={() => this.toggleModal(4)}
                                    />
                                </div>
                                <div className="card">
                                    <img 
                                    src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" 
                                    alt="" 
                                    onClick={() => this.toggleModal(5)}
                                    />
                                </div>
                                <div className="card">
                                    <img 
                                    src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" 
                                    alt="" 
                                    onClick={() => this.toggleModal(6)}
                                    />
                                </div>
                            </Slider>
                        </div>
                            <Modal
                                title={null}
                                visible={this.state.visible}
                                footer={null}
                                zIndex={1500}
                                onCancel={this.handleCancel}
                                width="unset"
                                bodyStyle={{ height: "100vh", width: "100%" }}
                            >
                                <div >

                                </div>

                            </Modal>
                        </div>
                </section>
            </div>
                )
            }
        }
