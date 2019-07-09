import React, { Component } from 'react'
import "./gps_timetable.css"

export default class GPS extends Component {
    render() {
        return (
            <div>
                <section id="gps_timetable" className="section">
                <h2 className="text-center">GPS / 節目表</h2>
                    <div   className="section-content">
                        <iframe
                            width="50%"
                            height="100%"
                            scrolling='no'
                            marginHeight='0' 
                            marginWidth='0'
                            className="maps"
                            frameBorder="0"
                            src="http://med.tori.narlabs.org.tw/Ship/gpsOutput/showGPStMap.php"
                        >
                        </iframe>
                        <div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
