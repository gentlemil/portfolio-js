import React from 'react';
import { Table } from 'reactstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement, WorkIcon } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Button from '../Button/Button'
import Main from '../../images/profile-photo.jpg';
import Background from '../../images/background.JPG';
import './Resume.scss'

class Resume extends React.PureComponent {
    constructor(props) {
        super()
        this.state = {
            personalData: [
                {
                    icon: "fas fa-envelope",
                    text: 'mil.bukala@gmail.com'
                },
                {
                    icon: "fas fa-phone-alt",
                    text: '+48 570 229 103'
                },
                {
                    icon: "fab fa-github",
                    text: 'github.com/gentlemil'
                },
                {
                    icon: "fab fa-linkedin",
                    text: 'linkedin.com/miloszbukala'
                },
            ],
            skillsData: [
                {
                    name: 'Javascript',
                    icon: 'fab fa-js',
                    type1: 'React',
                    type2: 'ES6',
                    type3: 'JQuery',
                },
                {
                    name: 'Python',
                    icon: 'fab fa-python',
                    type1: 'Django',
                    type2: 'Python OOP',
                    type3: ' ',
                },
                {
                    name: 'Others',
                    icon: 'fab fa-git-square',
                    type1: 'SQL',
                    type2: 'HTML',
                    type3: 'CSS/SASS',
                },
            ],
            educationData: [
                {
                    name: 'Codebrainers Programming School',
                    date: '10/2019 - till now',
                    faculty: 'Full Stack Developer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    name: '天津大学 - Tianjin University, China',
                    date: '09/2018 - 12/2018',
                    faculty: 'Control Science and Engineering',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    name: 'AGH University of Science and Technology',
                    date: '10/2012 - 02/2016',
                    faculty: 'Automatics and Robotics',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },


            ],
        }
    };

    componentDidMount() {
        let aos = AOS;
        aos.init({
            duration: 2000
        });
    }
    componentDidUpdate() {
        let aos = AOS;
        aos.refresh();
    }

    render() {
        // let backgroundStyle = { backgroundColor: '#3661be' }
        return (
            <div className='resume'>
                <div className='frameBox' >
                    <div className='frameBox__title'>
                        <h1>PERSONAL DATA</h1>
                        <h4>my short little cute introduction</h4>
                    </div>
                    <div className='frameBox__content'>
                        <div className='content__left'>
                            <div className='photo-resume'>
                                <img src={Main} alt='profile-photo' />
                            </div>
                        </div>
                        <div data-aos='fade-up' className='content__right'>
                            <div className='content__right__element'>
                                <h5>My name is Milosz and I am web designer.</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Table className='table'>
                                    <tbody>
                                        {this.state.personalData.map(item =>
                                            <tr>
                                                <th scope='row'><i class={item.icon}></i></th>
                                                <td>{item.text}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <div className='resume__buttons'>
                                    <Button name='ABOUT ME' />
                                    <Button name='MY PROJECTS' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='frameBox'>
                    <div className='frameBox__title'>
                        <h1>SKILLS AND ABBILITIES</h1>
                        <h4>I can say I'm quite good at</h4>
                    </div>
                    {/* --- */}
                    <div className='frameBox__content'>

                        {this.state.skillsData.map(item =>
                            <div className='content__element'>
                                <ul data-aos='fade-up' className='single-card'>
                                    <li><i class={item.icon}></i></li>
                                    <li><h4>{item.name}</h4></li>

                                    <li>
                                        <ul>
                                            <li><p><i class="fas fa-check" style={{ fontSize: '1.5rem' }}></i></p></li>
                                            <li><p>{item.type1}</p></li>
                                            <li><p>{item.type2}</p></li>
                                            <li><p>{item.type3}</p></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className='frameBox'>
                    <div className='frameBox__title'>
                        <h1>EDUCATION</h1>
                        <h4>my life changing experience</h4>
                    </div>
                    <div className='frameBox__content'>
                        <VerticalTimeline>
                            {this.state.educationData.map(item =>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element"
                                    contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                                    iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                                    date={item.date}
                                    icon={<i class="fas fa-briefcase"></i>}
                                >
                                    <h3 className="vertical-timeline-element-title">{item.name}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{item.faculty}</h4>
                                    <p className="vertical-timeline-element-description">
                                        {item.description}
                                    </p>
                                </VerticalTimelineElement>
                            )}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        );
    }

};

export default Resume;