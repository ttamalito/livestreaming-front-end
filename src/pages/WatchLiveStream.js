import {useParams} from "react-router-dom";

import '../styles/watchLiveStream.css'
import {useEffect, useRef, useState} from "react";

export default function WatchLiveStream() {

    // get user being watched
    const params = useParams();
    const user = params.user;

    // create a video tag
    const video = <video src={`https://localhost:8443/user/live`} typeof={'video/webm'}
    controls={true} autoPlay={true}></video>
    return <>
        {video}
    </>
}
