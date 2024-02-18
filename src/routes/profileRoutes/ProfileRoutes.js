import React from "react";
import {Route, Routes} from "react-router-dom";
import Live from "../../pages/Live";
import WatchLiveStream
    from "../../pages/WatchLiveStream";



export default function ProfileRoutes() {

    return (<Routes>
        <Route exact path='/live' element={<Live/>}/>
        <Route exact path={'/:user/watchLive'} element={<WatchLiveStream />} />

    </Routes>);
}