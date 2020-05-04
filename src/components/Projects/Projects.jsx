import React from 'react';
import Button from '../Button/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.scss'
import Project from './Project';

import Plantastic from '../../images/projects/plantastic.png'
import Drukarnia from '../../images/projects/drukarnia.png'
import Omnifood from '../../images/projects/omnifood.png'
import Arlo from '../../images/projects/arlo.png'


class Projects extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [
                {
                    name: 'PLANTASTIC',
                    description: 'An application to monitor the ornamental flowers that we have on our apartment. Connected to API created with Django framework. Shows basic information about plants, their requirements, e.g. date of last watering. Application created in a 6-person team.',
                    image: 'http://lorempixel.com/400/200',
                    buttonPath: 'https://github.com/argasek/codebrainers-plantastic',
                },
                {
                    name: 'TODO App',
                    description: 'My first application created using the React library. The tasks are saved in Local Storage. You can edit them as well as delete them. The application counts down the time to complete the task.',
                    image: 'http://lorempixel.com/400/200',
                    buttonPath: ''
                },
                {
                    name: 'Drukarnia Club',
                    description: 'The website of the "Drukarnia" café club was created entirely with the help of Django. It contains basic information about the pub, a system for creating new users (employees) who can add/edit/delete bookings. The menu is also created in a dynamic way thanks to the connected API created by me. It also has a contact form. The site is still in testing stage.',
                    image: 'http://lorempixel.com/400/200',
                    buttonPath: 'https://drukarnia-club.herokuapp.com/'
                },
                {
                    name: 'CV Template',
                    description: 'Due to the lack of interesting templates in the CV wizards I decided to create my own html template which you can see by clicking below.',
                    image: 'http://lorempixel.com/400/200',
                    buttonPath: ''
                },
                {
                    name: 'Arlo html Template',
                    description: "As part of the exercises, using pure HTML5, CSS3 styling and Javascript, I created a fully functional website 'Arlo template'.",
                    image: 'http://lorempixel.com/400/200',
                    buttonPath: 'https://gentlemil.github.io/webProject/'
                },
                {
                    name: 'Omnifood Restaurant Template',
                    description: "As part of the exercises, using pure HTML5, CSS3 styling and Javascript, I created a fully functional website 'omnifood'.",
                    image: 'http://lorempixel.com/400/200',
                    buttonPath: ''
                },
            ]
        }

    }

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
                    {this.state.projectData.map(item =>
                        <Project
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            buttonPath={item.buttonPath}
                        />
                    )}
                </div>
            </div>
        );
    }
};

export default Projects;