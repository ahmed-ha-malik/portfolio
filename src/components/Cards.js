import React from 'react';
import CardItems from './CardItems';
import './Cards.css';
import img2 from '../images/img-2.jpg';
import img1 from '../images/img-1.jpg';
import ecommerceImg from '../images/e-commerce.jpg';
import recipeImg from '../images/recipe.jpg';
import mediaImg from '../images/malikmedia.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems src={ecommerceImg}
                        text='Smart Store, the online retail store to purchase electronic devices. A React App utilizing Material-Ui for the front end, and CommerceJs for the back end. Payment processing is accomplished with Stripe integration.'
                        label='E-Commerce React App'
                        path='https://quizzical-thompson-0ebf27.netlify.app/'
                        />
                        <CardItems src={recipeImg}
                        text= "Providing lists of cusines for when you can't decide what to eat. Built with React, utilizing api calls to fetch relevant data."
                        label='Cuisine Suggesting React App'
                        path='https://laughing-turing-ef0d5f.netlify.app/'  />
                        <CardItems src={mediaImg}
                        text="MalikMedia, the social media app to share your thoughts with the world. This React App has a modern design and includes login/logout, and creating posts functionalities. Back end magic is accomplished with the use of Google's Firebase."
                        label='Social Media React App'
                        path='https://social-media-2e78f.web.app/'  />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
