import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sunny from './Sunny';
import Ravi from './Ravi';
import New from "./New";
function Apps(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sunny/>}/>
                <Route path="/ravi" element={<Ravi/>}>
                    <Route path="new" element={<New/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>

    )
}
export default Apps;