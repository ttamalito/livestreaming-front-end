import {useEffect, useRef, useState} from "react";


export default function Live() {
    // use Effect to mount a script
    useEffect(() => {
        fetch(`https://localhost:8443/user/live`, {
            method: 'POST',
            body: 'Hello Server, in how many chunks do you receive this?'
        }).then(res => console.log(res));
        fetch(`https://localhost:8443/user/live`, {
            method: 'POST',
            body: 'Hello Server again, is this the same stream?'
        }).then(res => console.log(res));
    }, []);
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

    const form = <form onSubmit={onSubmitSendBigFile}>
        <input type={'file'} id={'file'}/>
        <button>Send big file</button>
    </form>
    return (
        <>
            {videoOutput}
            {videoSrc && <p>LiveStreaming!</p>}
            {permissionButton}
            {form}
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

function onSubmitSendBigFile(event) {
    event.preventDefault();
    // get the file
    const file = event.nativeEvent.srcElement['file'].files[0];
    // create a fileReader
    const fileReader = new FileReader();

    // add the event listener to know when the file was read
    fileReader.addEventListener('load', async e => {
        // the file finished loading, when the event is triggered
        // upload it to the server
        // generate a unique id for the file
        //const fileName = `${Date.now()}-${Math.random() * 1000}-${files[i].name}`;
        //console.log(`the file name: ${fileName}`)
        // loop through all the chunks
            const dataToTransfer = fileReader.result;
            // send the post request
            try {
                const response = await fetch(`https://localhost:8443/user/live`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/octet-stream',
                        "Content-Length": dataToTransfer.byteLength,
                    },
                    body: dataToTransfer
                });
                //console.log(response)
                //console.log(`After sendin a post request and getting the response: ${Date.now()}`)
            } catch (error) {
                console.log(error);
            }

    }) // end of eventListener
    // start reading the file as an array buffer (basically an array of bytes)
    fileReader.readAsArrayBuffer(file);
}