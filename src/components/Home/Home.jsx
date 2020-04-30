import React from 'react';
import Button from '../Button/Button'
import Background from '../../images/background.JPG';
import Main from '../../images/main.jpg';
import './Home.scss'

const Home = () => {

    let ReactRotatingText = require('react-rotating-text');

    let contentStyle = {
        backgroundImage: `url(${Background})`,
        // backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundAttachtement: 'fixed',
    };

    return (
        <div className='home' style={contentStyle}>
            <div className='content'>
                <div className='home__profile-photo'>
                    <img src={Main} alt='profile-photo' />
                </div>
                <h1>MILOSZ BUKALA</h1>
                <ReactRotatingText
                    style={{ color: 'white', fontSize: '2rem', }}
                    items={['FullStack JavaScript Developer', 'Traveler, Backpacker, Hitchhiker', 'Dog and fish owner']} />
                <div className='home__buttons'>
                    <Button name='ABOUT' />
                    <Button name='MY CV' />
                </div>
            </div>
        </div>

    );
};

export default Home;