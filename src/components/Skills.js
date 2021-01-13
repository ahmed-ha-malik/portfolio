import React from 'react';
import SkillItems from './SkillItems';
import './Skills.css';
import img2 from '../images/img-2.jpg';
import reactImg from '../images/react.png';
import javascriptImg from '../images/javascript.png';
import nodeImg from '../images/node.jpg';
import htmlcssImg from '../images/htmlcss.jpg';
import sassImg from '../images/sass.png';
import bootstrapImg from '../images/bootstrap.png';
import javaImg from '../images/java.png';
import wordpressImg from '../images/wordpress.png';
import drupalImg from '../images/drupal.png';
import gitImg from '../images/git.png';
import githubImg from '../images/github.png';
import mysqlImg from '../images/mysql.jpg';
import phpImg from '../images/php.png';

function Skills() {
    return (
        <div className='skills'>
            <h1>My Technologies</h1>
            <div className="skills__container">
                <div className="skills__wrapper">
                    <ul className="skills__items">
                        <SkillItems src={reactImg} 
                        text='JavaScript library used for front end development'
                        label='ReactJS'
                        />
                        <SkillItems src={javascriptImg}
                        text= "Client side programming language"
                        label='Javascript - ES6'
                        />
                        <SkillItems src={nodeImg}
                        text='JavaScript runtime, used for running JS code on the server side'
                        label='NodeJS'
                        />
                        <SkillItems src={htmlcssImg}
                        text='Fundamental technology required to create web content'
                        label='HTML/CSS'
                        />
                    </ul>
                    <ul className="skills__items">
                        <SkillItems src={sassImg}
                        text= "Pre-processor used as an extension to CSS"
                        label='SASS'
                        />
                        <SkillItems src={bootstrapImg}
                        text='CSS framework used for responsive web design'
                        label='Bootstrap'
                        />
                        <SkillItems src={javaImg}
                        text='Object oriented programming language'
                        label='Java'
                        />
                        <SkillItems src={wordpressImg}
                        text= "Content Management System"
                        label='WordPress'
                        />
                    </ul>
                    <ul className="skills__items">
                        
                        <SkillItems src={drupalImg}
                        text='Content Management System'
                        label='Drupal'
                        />
                        <SkillItems src={gitImg}
                        text='Version Control System'
                        label='Git'
                        />
                        <SkillItems src={githubImg}
                        text= "Source Code Management used in coordination with Git"
                        label='Github'
                        />
                        <SkillItems src={phpImg}
                        text='Scripting language used in web development'
                        label='PHP'
                        />
                        <SkillItems src={mysqlImg}
                        text='Query language used to manage databases'
                        label='SQL'
                        />
                    </ul>
                    <ul className="skills__items">
                        
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills;
