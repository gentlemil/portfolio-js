import React from 'react';
import Button from '../Button/Button';
import Background from '../../images/background.JPG';
import Main from '../../images/main.jpg';
import './Home.scss';

const Home = () => {

    let ReactRotatingText = require('react-rotating-text');

    let contentStyle = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center center',
        backgroundAttachtement: 'fixed',
    };

    return (
        <div className='home' style={contentStyle}>
            <div className='content'>
                <div className='home__profile-round'>
                    <img src={Main} alt='profile-round' />
                </div>
                <h1>MILOSZ BUKALA</h1>
                <ReactRotatingText
                    style={{ color: 'white', fontSize: '2rem', }}
                    items={['FullStack JavaScript Developer', 'Traveler, Backpacker, Hitchhiker', 'Enginner of automation and robotics']} />
                <div className='home__buttons'>
                    <Button name='MY CV' path='https://www.scribd.com/document/460856950/CV-Milosz-Bukala-Pl-and-Eng' />
                </div>
            </div>
        </div>
    );
};

export default Home;