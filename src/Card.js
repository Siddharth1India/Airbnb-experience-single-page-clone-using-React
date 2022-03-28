import React from "react";
// import card from './katie-zaferes.png';
import star from './star.png';

export default function Card(props){
    let badgeText
    if(props.openSpot===0){
        badgeText='SOLD OUT'
    }
    else if(props.location==='Online'){
        badgeText="ONLINE"
    }
    return(
        <div className="Card">
            {badgeText && <div className="cardOut">{badgeText}</div>}
            <img src={require(`./${props.img}`)} alt="img" className="cardImg" />
            <div className="stats">
                <img src={star} alt='star' className="starC" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) •</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}