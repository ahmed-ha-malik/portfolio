import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../images/code.mp4';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>Hello, my name is Ahmed Malik</h1>
            <p>A developer based in Springfield Virginia</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large' to='/works'>
                    My Works
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large' to='/about'>
                    About Me<i className='fas fa-address-card' />
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection;
