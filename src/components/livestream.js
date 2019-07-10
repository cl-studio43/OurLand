import React, { Component } from 'react'
import "./livestream.css"

export default class LiveStream extends Component {
    render() {
        return (
            <div>
                <section id="livestream" className="section">
                <h2 className="text-center">直播</h2>
                    <div className="section-content liveStream">
                         <iframe
                             title="Livestream" 
                             className="liveStreamFrame"
                             src="https://www.youtube.com/embed/Ps1GMHhfK2w" 
                             frameBorder="0" 
                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen>
                         </iframe>
                    </div>
                </section>
            </div>
        )
    }
}
