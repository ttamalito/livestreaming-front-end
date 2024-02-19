import {Route, Routes} from "react-router-dom";
import React from "react";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";

export default function AuthenticationRoutes() {

    return (<Routes>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path={'/login'} element={<Login/>} />

    </Routes>);
}