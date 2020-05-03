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
                                An application to monitor the ornamental flowers that we have on our apartment. Connected to API created with Django framework. Shows basic information about plants, their requirements, e.g. date of last watering. Application created in a 6-person team.
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
                                My first application created using the React library. The tasks are saved in Local Storage. You can edit them as well as delete them. The application counts down the time to complete the task.
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
                                The website of the "Drukarnia" café club was created entirely with the help of Django. It contains basic information about the pub, a system for creating new users (employees) who can add/edit/delete bookings. The menu is also created in a dynamic way thanks to the connected API created by me. It also has a contact form. The site is still in testing stage.
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
                                Due to the lack of interesting templates in the CV wizards I decided to create my own html template which you can see by clicking below.
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
                                As part of the exercises, using pure HTML5, CSS3 styling and Javascript, I created a fully functional website 'Arlo template'.
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
                                As part of the exercises, using pure HTML5, CSS3 styling and Javascript, I created a fully functional website 'omnifood'.
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