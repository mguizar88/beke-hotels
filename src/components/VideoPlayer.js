import React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css';

const videoPlayer = class extends React.Component {

    componentDidMount() {
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        })
    }

    componentWillUnmount() {
        if(this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video ref={ node => this.videoNode = node } className="video-js"></video>
                </div>
            </div>
        )
    }

}

export default videoPlayer