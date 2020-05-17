import React from 'react';
import Button from '../Button/Button';
import './Home.scss';

const Home = () => {

    let ReactRotatingText = require('react-rotating-text');

    let contentStyle = {
        backgroundImage: `url('https://i.imgur.com/OERLWnR.jpg')`,
        backgroundPosition: 'center center',
        backgroundAttachtement: 'fixed',
    };

    return (
        <div className='home' style={contentStyle}>
            <div className='content'>
                <div className='home__profile-round'>
                    <img src={'https://i.imgur.com/A0jXulU.jpg'} alt='profile-round' />
                </div>
                <h1>MILOSZ BUKALA</h1>
                <ReactRotatingText
                    style={{ color: 'white', fontSize: '2rem', }}
                    items={['FullStack JavaScript Developer', 'Traveler, Backpacker, Hitchhiker', 'Enginner of automation and robotics']} />
                <div className='home__buttons'>
                    <Button name='MY CV' path='https://www.scribd.com/document/461875515/Cv-Milosz-Bukala-Pl-and-Eng' />
                </div>
            </div>
        </div>
    );
};

export default Home;