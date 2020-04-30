import React from 'react';
import './Button.css'

const Button = props => {
    return (
        <div className='button-frame'>
            <a href={props.path}>
                <p className='button-frame__text'>{props.name}</p>
            </a>
        </div>
    )
};

export default Button;