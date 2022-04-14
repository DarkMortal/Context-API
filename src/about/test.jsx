import React from "react";
import ReactDOM from "react-dom";
import Test1 from "./test1";
import {someContext} from "./Contexts/context1";

var user={
    name:"Gogeta",
    data:{
        about:"Vegeta, we can get even stronger",
        desc:"I am InSaiyan from Vampa"
    }
}

ReactDOM.render(
    <React.StrictMode>
        <>
        <someContext.Provider value={user}>
        <h1><u>This is about Page</u></h1>
        <details>
            <summary>Dragon Ball Z EE</summary>
            Never gonna give you up<br/>
            Never gonna let you down<br/>
            Never gonna run around and desert you<br/>
        </details>
        <Test1/>
        </someContext.Provider>
        </>
    </React.StrictMode>,
    document.getElementById("test")
);