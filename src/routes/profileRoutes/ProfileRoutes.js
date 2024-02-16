import React from "react";
import {Route, Routes} from "react-router-dom";
import Live from "../../pages/Live";



export default function ProfileRoutes() {

    return (<Routes>
        <Route exact path='/live' element={<Live/>}/>

    </Routes>);
}