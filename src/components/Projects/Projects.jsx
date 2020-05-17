import React from 'react';
import { Grid } from 'semantic-ui-react';
import Project from './Project';
import AOS from 'aos';
import '../../../node_modules/semantic-ui-css/semantic.css';
import 'aos/dist/aos.css';
import './Projects.scss';

class Projects extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [
                {
                    name: 'Portfolio',
                    description: "As part of the exercises, using pure HTML5, CSS3 styling and Javascript, I created a fully functional responsive website 'Arlo template'. It is stored on Github servers.",
                    image: 'https://i.imgur.com/NlXoG0U.png',
                    imageMobile: 'https://i.imgur.com/HCXlKW6.png',
                    buttonPath: 'https://gentlemil.github.io/portfolio-template/',
                    buttonCodePath: 'https://github.com/gentlemil/portfolio',
                },
                {
                    name: 'Drukarnia Club',
                    description: 'The website of the "Drukarnia" café club was created entirely in Django Framework. It contains basic information about the pub, backend responsible for creating new users (employees) who can change bookings. The menu is also created in a dynamic way. All informations are stored in a database. It also has a contact form. Website was deployed on Heroku servers.',
                    image: 'https://i.imgur.com/mIvdVzO.png',
                    imageMobile: 'https://i.imgur.com/2MixRZ6.png',
                    buttonPath: 'https://desolate-plains-32974.herokuapp.com/',
                    buttonCodePath: 'https://github.com/gentlemil/drukarnia-club',
                },
                {
                    name: 'my Portfolio',
                    description: "A fully responsive website built using the React JavaScript library. It is stored on AWS servers (Amazon Web Services), while the file structure is stored on the Github hosting software service. Click below to see more.",
                    image: 'https://i.imgur.com/uLMA9ee.png',
                    imageMobile: 'https://i.imgur.com/9B2ayAc.png',
                    buttonPath: 'https://gentlemil.github.io/portfolio-template/',
                    buttonCodePath: 'https://github.com/gentlemil/portfolio-template',
                },
                {
                    name: 'TODO App',
                    description: 'My first application created using the React library. The tasks are saved in Local Storage. You can edit them as well as delete them. The application counts down the time to complete the task. In progress.',
                    image: 'https://i.imgur.com/EJ8IcbK.jpg',
                    imageMobile: 'https://i.imgur.com/2Rvp22T.jpg',
                    buttonCodePath: 'https://github.com/gentlemil/todo-app',
                },
                {
                    name: 'Omnifood Restaurant Template',
                    description: "As part of the exercises, using pure HTML5, CSS3 styling and Javascript, I created almost fully functional website 'omnifood'.",
                    image: 'https://i.imgur.com/y7oyPrN.png',
                    imageMobile: 'https://i.imgur.com/FLKHJD5.png',
                    buttonPath: 'ttps://gentlemil.github.io/foody-page',
                    buttonCodePath: 'https://github.com/gentlemil/foody-page',
                },
            ],
        }
    }

    componentDidMount() {
        AOS.init({
            offset: 400,
            delay: 0,
            duration: 1000
        });
    };

    componentDidUpdate() {
        AOS.refresh();
    };

    render() {
        window.addEventListener('load', AOS.refresh);
        return (
            <div className="projects">
                <div className='frameBox' >
                    <div className='frameBox__title'>
                        <h1>MY WORK</h1>
                        <h4>very short list with details of my (un)done projects</h4>
                    </div>
                    <Grid celled>
                        {this.state.projectData.map(item =>
                            <Project
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                imageMobile={item.imageMobile}
                                buttonPath={item.buttonPath}
                                buttonCodePath={item.buttonCodePath}
                            />
                        )}
                    </Grid>
                </div>
            </div>
        );
    }
};

export default Projects;