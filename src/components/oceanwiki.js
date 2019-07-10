import React, { Component } from 'react'
import "./oceanwiki.css"
import { Modal, Card } from "antd"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import first from "../images/1.jpg"
// import second from "../images/2.jpg"
import third from "../images/3.jpg"
import fourth from "../images/4.jpg"
import fifth from "../images/5.jpg"



const { Meta } = Card;
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

export default class OceanWiki extends Component {
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
        const cardVideo = [
        <iframe className="modalIframe" src="https://www.youtube.com/embed/aHNsuYHlMQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        <iframe className="modalIframe" src="https://www.youtube.com/embed/FMl7GEaYwAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        <iframe className="modalIframe" src="https://www.youtube.com/embed/aHNsuYHlMQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        <iframe className="modalIframe"src="https://www.youtube.com/embed/FMl7GEaYwAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        <iframe className="modalIframe" src="https://www.youtube.com/embed/FMl7GEaYwAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ]
        
        
        return (
            <div>
                <section id="oceanwiki" className="section wiki">
                    <h2 className="text-center">深海探險去</h2>
                    <p>深海，一般指水深200公尺以下，那裡黑暗、低溫、缺氧、壓力大、食物貧瘠，卻是地球上最
                        大的生態系。在台灣深海裡，東北海域有熱泉生態系；西南海域有冷泉生態系，想要一窺深海
                        神祕面紗嗎，一起探險去!</p>
                    <div className="section-content">
                        <div className="slider">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(1)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={first} />}
                                >
                                    <Meta title="登上勵進研究船" description="www.instagram.com" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(2)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={first} />}
                                >
                                    <Meta title="感受深海的壓力" description="每下潛10公尺，會增加一大氣壓，以600CC的保麗龍杯為例，放到水下1000公尺的深海，瞬
                                        間就會被壓縮。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(3)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={third} />}
                                >
                                    <Meta title="探索深海好幫手" description="ROV水下遙控無人載具可以下潛到水深3000公尺，回傳多重角度的海底影像，再搭配機械手
                                    臂採樣，宛如科學家的眼與手。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(4)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={fourth} />}
                                >
                                    <Meta title="認識海底黑煙囪" description="海水受到岩漿加熱噴發，並溶解周圍的礦物質，熱液碰到海水後冷卻結晶，堆積成煙囪狀，因
                                    含有硫化物顏色漆黑，被稱為「黑煙囪」。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(5)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={fifth} />}
                                >
                                    <Meta title="遇見可燃冰" description="天然氣在低溫高壓環境下形成的固狀物，點火可燃，學名叫「天然氣水合物」，分布在永凍土
                                    及海洋中，是備受重視的新能源。" />
                                </Card>
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
                                {cardVideo[this.state.currentModal]}
                            </div>

                        </Modal>
                    </div>
                </section>
            </div>
        )
    }
}
