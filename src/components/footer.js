import React, { Component } from 'react'
import './footer.css'
import logoN from '../images/logo-n.png'
import logoO from '../images/logo-o.png'
import logoT from '../images/logo-t.png'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section id="about" className="section footerBG">
                    <div className="section-content">
                        <div className="footerBlock">
                            <div className="sectionArea">
                                <h4 className="footerTitle">公視新聞部</h4>
                                <div className="logoArea">
                                    <div className="imgFrameN">
                                        <img src={logoN} alt="公視" />
                                    </div>
                                    <div className="imgFrame">
                                        <img src={logoO} alt="我們的島" />
                                    </div>
                                    <div className="imgFrame">
                                        <img src={logoT} alt="有話好說" />
                                    </div>
                                    <div className="imgFrame">
                                        <img src={logoT} alt="新聞實驗室" />
                                    </div>
                                </div>
                            </div>
                            <div className="sectionArea">
                                <h4 className="footerTitle">資料及影像提供</h4>
                                <p>國家實驗研究院 台灣海洋科技研究中心</p>
                                <p>經濟部中央地質調查所</p>
                                <p>中山大學海下所 水下機電實驗室</p>
                                <p>國立海洋科技博物館 廖運志</p>
                            </div>
                            <div className="sectionArea">
                                <h4 className="footerTitle">網頁設計</h4>
                                <p>通點設計有限公司</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
