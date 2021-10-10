import React from 'react'
import { Button } from "./Button";
import { MdPlayCircleOutline } from "react-icons/md";
import "./Hero.css";
import "../App.css";

function Hero() {
    return (
        <div className='hero-container'>    
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Digital Platform Creators</h1>
            <p>Digitilizing Namibia One Software At A Time</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET A QOUTA</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <MdPlayCircleOutline className='play-cirlce-btn'/> </Button>
            </div>
        </div>
    )
}

export default Hero
