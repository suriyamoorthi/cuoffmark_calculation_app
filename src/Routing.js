import React from "react";
import {Routes,Route} from "react-router-dom"
import Forms from "./components/Form"
function Routing(){
    return(
<Routes>
    <Route path="/" element={<Forms/>}/>
</Routes>
    )
}
export default Routing;