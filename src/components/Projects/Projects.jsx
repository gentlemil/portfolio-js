import React from 'react';
import Button from '../Button/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.scss'

class Projects extends React.PureComponent {

    componentDidMount() {
        AOS.init({
            offset: 400, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 2000 // values from 0 to 3000, with step 50ms
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
                    <div className="card" data-aos="fade-down">
                        <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
                        <div className='content'>
                            <h3>PLANTASTIC</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                        </p>
                            <Button name='CHECK GITHUB' />
                        </div>
                    </div>
                    <div className="card" data-aos="fade-down">
                        <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
                        <div className='content'>
                            <h3>Todo app</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                        </p>
                            <Button name='CHECK GITHUB' />
                        </div>
                    </div>

                    <div className="card" data-aos="fade-down">
                        <img src="https://i.ibb.co/3NHjDcW/paint-2.png" alt="" />
                        <div>
                            <h3>Drukarnia Club</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                        </p>
                            <Button name='CHECK GITHUB' />
                        </div>
                    </div>
                    <div className="card" data-aos="fade-down">
                        <img src="https://i.ibb.co/3NHjDcW/paint-2.png" alt="" />
                        <div>
                            <h3>My CV</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                        </p>
                            <Button name='CHECK GITHUB' />
                        </div>
                    </div>
                    <div className="card" data-aos="fade-down">
                        <img src="https://i.ibb.co/3NHjDcW/paint-2.png" alt="" />
                        <div>
                            <h3>Arlo html Template</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                                officia. Ab, delectus.
                        </p>
                            <Button name='CHECK GITHUB' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Projects;