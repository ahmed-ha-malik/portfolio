import React from 'react';
import {Link} from 'react-router-dom';

function SkillItems(props) {
    return (
        <>
           <li className="skills__item">
               
                
                <a href={props.path} target='_blank' className="skills__item__link">
                    <figure className="skills__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt={props.label} className="skills__item__img"/>
                    </figure>
                    <div className="skill__item__info">
                        <h5 className="skills__item__text">{props.text}</h5>
                    </div>
                    </a>
                
                
            </li> 
        </>
    )
}

export default SkillItems;
