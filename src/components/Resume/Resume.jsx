import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Grid, Image } from 'semantic-ui-react';
import Main from '../../images/profile-photo.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../node_modules/semantic-ui-css/semantic.css';
import 'react-vertical-timeline-component/style.min.css';
import './Resume.scss';

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
                    date: '10/2019 - present',
                    faculty: 'Full Stack Developer',
                    description: 'During several months of bootcamp I was improving my front-end and backend skills under the guidance of experienced mentors. I created simple but functional applications using javascript, python and creating a database structure. I used the acquired skills while creating projects, which you can review the most important in the projects tab (click below).'
                },
                {
                    name: '天津大学 - Tianjin University, China',
                    date: '09/2018 - 12/2018',
                    faculty: 'Control Science and Engineering',
                    description: 'As part of the Chinese Government Scholarschip program, I spent three months at the University of Tianjin, taking lessons from experienced Chinese teachers in Control Science and Engineering. I lived in a dorm, learned the Chinese language and spent my free time in an international company visiting the city and its surroundings and learning the secrets of Chinese cuisine.'
                },
                {
                    name: 'AGH University of Science and Technology',
                    date: '10/2012 - 02/2016',
                    faculty: 'Automatics and Robotics',
                    description: "I studied at the University of Science and Technology in Kraków, Faculty of Mechanical Engineering and Robotics, majoring in automation and robotics. It's been a rough three and a half years, but it paid off. I got the name of the engineer by defending the work on the power supply to the active hand denture."
                }
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
        return (
            <div className='resume'>
                <div className='frameBox' >
                    <div className='frameBox__title'>
                        <h1>PERSONAL DATA</h1>
                        <h4>my short little cute introduction</h4>
                    </div>
                    <div className='frameBox__content'>
                        <Grid>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                <Image className='resume-image' src={Main} alt='profile-photo' />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                <div className='content__right__element' data-aos='fade-up'>
                                    <h5>My name is Milosz and I am web designer.</h5>
                                    <p>
                                        I am an automation engineer by profession, a passionate
                                        traveler and programmer. I love challenges, unconventional
                                        solutions, and teamwork with people with passion. It. For me, it is not
                                        the most important goal I set myself, but the path I follow in achieving
                                        it.
                                    </p>
                                    <table className='table'>
                                        <tbody>
                                            {this.state.personalData.map(item =>
                                                <tr>
                                                    <th scope='row'><i class={item.icon}></i></th>
                                                    <td>{item.text}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </div>
                </div>

                <div className='frameBox'>
                    <div className='frameBox__title'>
                        <h1>SKILLS AND ABBILITIES</h1>
                        <h4>I can say I'm quite good at</h4>
                    </div>
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
                                    contentStyle={{
                                        background: 'linear-gradient(135deg, rgba(4, 21, 69, 1) 0%, rgba(9, 41, 136, 0.75) 79%, rgba(6, 34, 117, 1) 100%)', color: 'seashell'
                                    }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgba(4, 21, 69, 1)' }}
                                    iconStyle={{ background: 'rgba(4, 21, 69, 1)', color: 'seashell', fontSize: '1.8rem', }}
                                    date={item.date}
                                    icon={<i class="fas fa-briefcase"></i>}
                                >
                                    <h3 className="vertical-timeline-element-title">{item.name}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{item.faculty}</h4>
                                    <p className="vertical-timeline-element-description">{item.description}</p>
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