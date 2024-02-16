import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
function Category(){
    let category=prompt("Write Category...").toLowerCase()
    if(category==="coder"){
        return(
            <Card
            name={Sdata[0].name}
            channelName={Sdata[0].category}
            ></Card>
        )
    }else if(category==="marketer"){
        return(
            <Card
            name={Sdata[1].name}
            channelName={Sdata[1].category}
            ></Card>
        )
    }else{
        return(
            <Card
            name={Sdata[2].name}
            channelName={Sdata[2].category}
            ></Card>
        )
    }


}
export default Category