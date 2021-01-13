import React from 'react';
import {Link} from 'react-router-dom';

function CardItems(props) {
    return (
        <>
           <li className="cards__item">
               
                
                <a href={props.path} target='_blank' className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="travel image" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                    </a>
                
                
            </li> 
        </>
    )
}

export default CardItems;
