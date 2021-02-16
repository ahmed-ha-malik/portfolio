import React from 'react';
import './ResumeButton.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


export const ResumeButton = ({children, type, onClick, buttonStyle, buttonSize, to, download}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <a href={to} download={download} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick} type={type}>
                {children}
            </button>
        </a>
    )
}
