import React from 'react';
import Button from '../Button/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.scss'

import Plantastic from '../../images/projects/plantastic.png'
import Drukarnia from '../../images/projects/drukarnia.png'
import Omnifood from '../../images/projects/omnifood.png'
import Arlo from '../../images/projects/arlo.png'


class Projects extends React.PureComponent {

    componentDidMount() {
        AOS.init({
            offset: 400, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000 // values from 0 to 3000, with step 50ms
        });
    }
    componentDidUpdate() {
        AOS.refresh();
    }

    render() {
        window.addEventListener('load', AOS.refresh);
        return (

            <div className="projects">
                <div className='frameBox' >
                    <div className='frameBox__title'>
                        <h1>MY WORK</h1>
                        <h4>very short list with details of my (un)done projects</h4>
                    </div>
                    {/* --- */}
                    <div className="card" data-aos="fade-down">
                        <div className='image'>
                            <img src={Plantastic} alt="plantastic" />

                        </div>
                        <div className='content'>
                            <h3>PLANTASTIC</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                            </p>
                            {/* <Button name='WEBSITE' path={''} /> */}
                            <Button name='CODE' path={'https://github.com/argasek/codebrainers-plantastic'} />
                        </div>
                    </div>

                    <div className="card" data-aos="fade-down">
                        <div className='image'>
                            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="todoapp" />
                        </div>
                        <div className='content'>
                            <h3>TODO application</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                            </p>
                            <div className='buttons'>
                                {/* <Button name='WEBSITE' path={''}/>
                                <Button name='CODE' path={''}/> */}
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-down">
                        <div className='image'>
                            <img src={Drukarnia} alt="drukarnia" />
                        </div>
                        <div className='content'>
                            <h3>Drukarnia Club</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                            </p>
                            <div className='buttons'>
                                <Button name='WEBSITE' path={'https://drukarnia-club.herokuapp.com/'} />
                                <Button name='CODE' path={'https://github.com/gentlemil/Klub-Drukarnia'} />
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-down">
                        <div className='image'>
                            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
                        </div>
                        <div className='content'>
                            <h3>CV Template</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                            </p>
                            <div className='buttons'>
                                {/* <Button name='WEBSITE' path={''}/> */}
                                <Button name='CODE' path={'https://github.com/gentlemil/Curriculum-Vitae'} />
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-down">
                        <div className='image'>
                            <img src={Arlo} alt="arlo" />
                        </div>
                        <div className='content'>
                            <h3>Arlo html Template</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                            </p>
                            <div className='buttons'>
                                <Button name='WEBSITE' path={'https://gentlemil.github.io/webProject/'} />
                                <Button name='CODE' path={'https://github.com/gentlemil/webProject'} />
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-down">
                        <div className='image'>
                            <img src={Omnifood} alt="omnifood" />
                        </div>
                        <div className='content'>
                            <h3>Omnifood Restaurant Template</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                            </p>
                            <div className='buttons'>
                                {/* <Button name='WEBSITE' path={''}/>
                            <Button name='CODE' path={''}/> */}
                            </div>
                        </div>
                    </div>
                    {/* --- */}

                </div>
            </div>
        );
    }
};

export default Projects;