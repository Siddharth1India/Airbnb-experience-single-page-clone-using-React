import React from "react";
import grid from './photo-grid.png'

export default function Hero(){
    return(
        <section className="Hero">
            <img src={grid} alt="grid"className="HeroImg" />
            <h1 className="HeroHead">Online Experiences</h1>
            <p className="HeroText">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}