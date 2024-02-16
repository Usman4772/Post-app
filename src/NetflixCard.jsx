import React from "react";
import { ReactDOM } from "react";
import Sdata from "./components/Sdata";
import "./netflixcard.css"

let btn={
    width: 10+"rem",
    height: 3+"rem",
    padding:1+"rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor:"crimson",
    outline:"none",
    border:"none",
    color:"white"
}

function NetflixCard(){
return(
    <React.Fragment>
    {Sdata.map(card=>{
        return(
        <div className="card">
        <img src={card.img} className="img" />
        <h3 className="title">{card.title}</h3>
        <button className="btn" style={btn} onClick={()=>{
window.location.href=card.link
        }}>Watch Now</button>
        </div>
        )
    })}
 
    </React.Fragment>
)
}

export default NetflixCard;