import React from "react";

function Card(props){
    return(
    <React.Fragment>
    <div className="container">
    <img src={props.Imgsrc} className="card-img"></img>
<h1 className="card-name">{props.name}</h1>
<h3 className="card-channel">{props.channelName}</h3>
<a href={props.link} className="card-channel">Visit Channel</a>
</div>

</React.Fragment>
    )
}
export default Card;