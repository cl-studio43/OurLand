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
        {"iframe":<iframe className="modalIframe" src="https://www.youtube.com/embed/aHNsuYHlMQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, },
        {"iframe":<iframe className="modalIframe" src="https://www.youtube.com/embed/FMl7GEaYwAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, },
        {"iframe":<iframe className="modalIframe" src="https://www.youtube.com/embed/aHNsuYHlMQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, },
        {"iframe":<iframe className="modalIframe"src="https://www.youtube.com/embed/FMl7GEaYwAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, },
        {"iframe":<iframe className="modalIframe" src="https://www.youtube.com/embed/FMl7GEaYwAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, }
    ]
        
        
        return (
            <div>
                <section id="oceanwiki" className="section wiki">
                    <h2 className="text-center">深海探險去</h2>
                    <div className="phone">
                        <div  className="info">
                            <h5 className="keyWords">深海，一般指水深200公尺以下，那裡黑暗、低溫、缺氧、壓力大、食物貧瘠，卻是地球上最
                                大的生態系。
                            </h5>
                            <p className="contents">
                            在台灣深海裡，東北海域有熱泉生態系；西南海域有冷泉生態系，想要一窺深海
                                神祕面紗嗎，一起探險去!
                            </p>
                        </div>
                    </div>
                    <div className="web">
                        <div  className="info">
                            <h5 className="keyWords"> 探索外太空，要靠太空梭與火箭，那去內太空深海探險，要靠什麼呢？</h5>
                            <p className="contents">
                            早期深海是人類無法抵達的神祕地帶，透過水下載具的研發，讓我們可以窺見局部樣貌，一般俗稱的深海，是指水深200公尺以下，光線照不到的地方。黑暗、低溫、缺氧、壓力大、食物貧瘠，卻是地球上最大的生態系，台灣附近海域有一半是深海環境，尤其東北角海域有熱泉生態系；西南海域有冷泉生態系，不過至今我們對於深海的瞭解仍相當有限。
                            </p>
                            <p className="contents">
                                台灣的深海裡有什麼呢，現在跟我們一起潛進深海探險吧。
                            </p>
                        </div>
                    </div>
                    <div className="section-content">
                        <div className="slider phone">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(0)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={first} />}
                                >
                                    <Meta title="登上勵進研究船" description="www.instagram.com" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(1)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={first} />}
                                >
                                    <Meta title="感受深海的壓力" description="每下潛10公尺，會增加一大氣壓，以600CC的保麗龍杯為例，放到水下1000公尺的深海，瞬
                                        間就會被壓縮。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(2)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={third} />}
                                >
                                    <Meta title="探索深海好幫手" description="ROV水下遙控無人載具可以下潛到水深3000公尺，回傳多重角度的海底影像，再搭配機械手
                                    臂採樣，宛如科學家的眼與手。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(3)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={fourth} />}
                                >
                                    <Meta title="認識海底黑煙囪" description="海水受到岩漿加熱噴發，並溶解周圍的礦物質，熱液碰到海水後冷卻結晶，堆積成煙囪狀，因
                                    含有硫化物顏色漆黑，被稱為「黑煙囪」。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(4)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={fifth} />}
                                >
                                    <Meta title="遇見可燃冰" description="天然氣在低溫高壓環境下形成的固狀物，點火可燃，學名叫「天然氣水合物」，分布在永凍土
                                    及海洋中，是備受重視的新能源。" />
                                </Card>
                            </Slider>
                        </div>
                        <div className="slider web">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(0)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={first} />}
                                >
                                    <Meta title="登上勵進研究船" description="台灣目前最大的研究船-勵進，為執行科學任務，配置動態定位系統，船可以固定在特定位置，讓探測儀器的佈放更加準確順利，後甲板有1.2個國際籃球場那麼大，可放大型探測儀器，船艙內還有三個實驗室，就像一座海上研究室。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(1)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={first} />}
                                >
                                    <Meta title="感受深海的壓力" description="要探索深海首先要克服壓力問題，一個600CC的保麗龍杯，放到1000公尺的深海，體積瞬間被壓縮，這是因為每下潛10公尺，會增加1大氣壓，如果到上千公尺的海域，要承受超過100大氣壓的作用。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(2)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={third} />}
                                >
                                    <Meta title="探索深海好幫手" description="ROV水下遙控無人載具，造價六億元，可以下潛到水深3000公尺進行探測，上面配置十二組攝影機和一組相機，能夠回傳多重角度的海底影像，再搭配機械手臂採樣，宛如科學家的眼與手，是研究深海的重要工具。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(3)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={fourth} />}
                                >
                                    <Meta title="認識海底黑煙囪" description="海底地殼張裂處，海水沿著裂隙流入海床下方，受到岩漿加熱噴發高達300°C以上，溶解周圍的金屬元素，熱液接觸到海水後冷卻結晶，堆積形成煙囪狀的結構物，因為含有硫化物顏色漆黑，又稱為「黑煙囪」，在它周邊有專門吃硫的細菌、管蟲、貽貝和潛鎧蝦等生物鏈，發展出特殊的生態系統。" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(4)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={fifth} />}
                                >
                                    <Meta title="遇見可燃冰" description="看起來像冰塊，點火可燃，俗稱可燃冰，學名叫「天然氣水合物」，是天然氣在低溫高壓環境下形成的固狀物，廣泛分布在永凍土及海洋中，在常溫下，1單位體積的可燃冰會釋放出150到180 倍的天然氣，因此成為國際間重視的新能源。" />
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
                                {cardVideo[this.state.currentModal].iframe}
                            </div>

                        </Modal>
                    </div>
                </section>
            </div>
        )
    }
}
