import React from "react";
function SlotM(props){
if(props.x===props.y && props.y===props.z){
    return(
        <h1>{props.x} {props.y} {props.z} = matching</h1>
    )
}else{
    return(
        <h1>{props.x} {props.y} {props.z} = not matching</h1>
    )
}



}
export default SlotM;