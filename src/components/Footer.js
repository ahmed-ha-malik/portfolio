import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join my email list 
                </p>
                <p className="footer-subscription-text">You can unsubscribe at any time</p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Your Email' className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Navigation</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/works'>Works</Link>
                        <Link to='/about'>About Me</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>My Projects</h2>
                        <Link to='/'>E-Commerce React App</Link>
                        <Link to='/'>Food Buddy React App</Link>
                        <Link to='/'>Social Media React App</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Socials</h2>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Guthub</Link>
                    </div>
                </div>

               
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            AM <i className="fas fa-laptop-code"/>
                        </Link>
                    </div>
                    <small className="website-rights">AM &#169; 2021</small>
                    <div className="social-icons">
                        <a className="social-icon-link github"
                        href='https://github.com/ahmed-ha-malik/'
                        target='_blank'
                        aria-label='Github'
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a className="social-icon-link linkedin"
                        href='https://www.linkedin.com/in/ahmedmalikit'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
