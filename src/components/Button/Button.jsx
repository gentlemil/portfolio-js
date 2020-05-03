import React from 'react';
import './Button.css'

const Button = props => {
    return (
        <div className='button-frame'>
            <a href={props.path}>
                <span className='button-frame__text'>{props.name}</span>
            </a>
        </div>
    )
};

export default Button;