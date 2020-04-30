import React from 'react'
import './DrawerToggleButton.scss'


const DrawerToggleButton = props => (

    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
    </button>

);

export default DrawerToggleButton;