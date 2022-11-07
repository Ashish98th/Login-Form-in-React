import React from "react";

import {useState} from "react";
const Event=()=>{
    let purple="purple";  //new thing
    const[bg,setBG]=useState(purple);
    const[name,setname]=useState("PURPLE")
    function bgChange(){
       setBG("yellow"); 
       setname("YELLOW");
    }
    function bgBack(){
        setBG(purple);
        setname("PURPLE");
    }
    return(
        <>
        <div style={{backgroundColor:bg}} >
            <button onMouseEnter={bgChange} onMouseLeave={bgBack} >{name}</button>
        </div>
        </>
    )
}
export default Event;