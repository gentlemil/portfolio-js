import React from 'react';
import Particles from 'react-particles-js';
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
                {/* <Particles
                    params={{
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#3CA9D1",
                                    blur: 5
                                }
                            }
                        }
                    }}
                    style={{
                        width: '100vw',
                        backgroundImage: `url(${Background})`
                    }}
                /> */}
                <div className='home__profile-photo'>
                    <img src={Main} alt='profile-photo' />
                </div>
                <h1>MILOSZ BUKALA</h1>
                <ReactRotatingText
                    style={{ color: 'white', fontSize: '2rem', }}
                    items={['FullStack JavaScript Developer', 'Traveler, Backpacker, Hitchhiker', 'Enginner of automation and robotics']} />
                <div className='home__buttons'>
                    <Button name='MY CV' />
                </div>

            </div>
        </div>

    );
};

export default Home;