import React from "react";
import {Routes,Route} from "react-router-dom";
import Forms from "./components/Form";
import UserDetails from "./components/User_details";

function Routing(){
    return(
<Routes>
    <Route path="/" element={<Forms/>}/>
    <Route path="/UserDetails" element={<UserDetails/>}/>
</Routes>
    )
}
export default Routing;