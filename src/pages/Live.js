import {useRef, useState} from "react";


export default function Live() {
    // useRef for video src
    const [videoSrc, setVideoSrc] = useState(false);
    const videoRef = useRef(<video
        autoPlay={true}></video>);
    const videoOutput = <video id={'video-opt'} autoPlay={true}></video>
    const livestreaming = videoSrc;
    const permissionButton = <button
        onClick={() => {
            onClickStartLiveStream(setVideoSrc);
        }}
        >Start Live streaming</button>
    return (
        <>
            {videoOutput}
            {videoSrc && <p>LiveStreaming!</p>}
            {permissionButton}
        </>
    )
} // end of component


function onClickStartLiveStream(setVideoSrc) {
    console.log(`Starting live straming`)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log(`Get User media supported`);
        // get the media
        navigator.mediaDevices
            .getUserMedia({audio: true, video: true},)
            .then((stream) => {
                console.log(`We have the stream`);
                setVideoSrc(true);
                const vid = document.querySelector('#video-opt');
                vid.srcObject = stream;
                vid.onloadedmetadata = function(e) {
                    vid.play();
                };
            })
    } // end of if to see if media is available
} // end of handler