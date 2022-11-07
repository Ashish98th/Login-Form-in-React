import React from "react";
import {useState} from "react";



const Get_Time=()=>{
  let Time=new Date().toLocaleTimeString();
  const[cTime,setTime]=useState(Time);

function upDateTime(){
  let newTime=new Date().toLocaleTimeString();
  setTime(newTime);
}
return(

  <>
    <h1>{Time}</h1>
    <button onClick={upDateTime} >Get Time</button>
  </>

)
}
export default Get_Time;