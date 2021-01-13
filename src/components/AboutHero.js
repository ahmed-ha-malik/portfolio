import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutHero.css';
import video2 from '../images/code.mp4';
import video from '../images/tea.mp4';

function AboutHero() {
    return (
        <div className='aboutHero-container'>
            <video src={video} autoPlay loop muted />
            <h1>Hey there! I'm Ahmed, an IT grad with a concentration in Web Development</h1>
            
            <div className="aboutHero-btns">
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large' to='/works'>
                    Resume<i className='fas fa-download' />
                </Button>
            </div>
            <p>
                I pride myself in my love for learning, and my prowess as a student of my craft!
                Besides coding, I find true joy in studying world history, philosophy, and learning Arabic,
                all while being accompanied by my faithful cup of tea. The culmination of my happiness is found
                in discussing everything I learn with my friends and family.</p>

            
        </div>
    )
}

export default AboutHero;
