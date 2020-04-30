import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Background from '../../images/background.JPG';
import 'react-vertical-timeline-component/style.min.css';
import './About.scss'

const About = () => {
    return (
        <div className='about' >
            <div className='frameBox' >
                <div className='frameBox__title'>
                    <h1>ABOUT MYSELF</h1>
                    <h4>shortly who the hell I am</h4>
                </div>
                <div className='frameBox__content'>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="01/2019 - present"
                            icon={<i class="fas fa-briefcase"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Club Drukarnia, Cracow</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bartender</h4>
                            <p className="vertical-timeline-element-description">
                                Preparing cocktails, latte art, cash handling, daily making orders
                                from suppliers, creating a friendly atmosphere, making good and
                                professional contact with the customers. I have learned
                                responsibility, how to talk with clients, how to response quickly to
                                new, unexpected situations an respect to the team.
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="04/2018 - 08/2018"
                            icon={<i class="fas fa-briefcase"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Hotel Budir, Iceland</h3>
                            <h4 className="vertical-timeline-element-subtitle">Chef assistent</h4>
                            <p className="vertical-timeline-element-description">During a summer season in Iceland I was working for few months in a kitchen in one of
                            the most hotels in Iceland. In my free time I was hitchhiking, meeting new people, hiking
                            and looking for wild hot springs.
                    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="02/2018"
                            icon={<i class="far fa-compass"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">International Balloon Fiesta 2018, Thailand</h3>
                            <h4 className="vertical-timeline-element-subtitle">Team Member</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="04/2017 - 12/2017"

                            icon={<i class="fas fa-briefcase"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Artefakt Cafe, Cracow</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bartender</h4>
                            <p className="vertical-timeline-element-description">
                                Preparing cocktails, latte art, cash handling, daily making orders
                                from suppliers, creating a friendly atmosphere, making good and
                                professional contact with the customers. I have learned
                                responsibility, how to talk with clients, how to response quickly to
                                new, unexpected situations an respect to the team.
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="02/2017"

                            icon={<i class="far fa-compass"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">International Balloon Fiesta 2017, Thailand</h3>
                            <h4 className="vertical-timeline-element-subtitle">Team Member</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="01/2017 - 02/2017"

                            icon={<i class="fas fa-briefcase"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">โรงเรียนบ้านทุ่งแม่น้ำน้อย, Thailand</h3>
                            <h4 className="vertical-timeline-element-subtitle">English teacher</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="December 2016"
                            icon={<i class="fas fa-motorcycle"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Travel, Vietnam</h3>
                            <h4 className="vertical-timeline-element-subtitle">Driving on the motorbike through Vietnam</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="10/2016 - 12/2016"
                            icon={<i class="fas fa-globe-asia"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Hitchhike, South-East Asia</h3>
                            <h4 className="vertical-timeline-element-subtitle">Travel</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="10/2016"
                            icon={<i class="fas fa-globe-asia"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Travel, Australia</h3>
                            <h4 className="vertical-timeline-element-subtitle">Hitchhike and explore south Australia</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="03/2016 - 10/2016"
                            icon={<i class="fas fa-globe-asia"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Work & Travel, New Zealand</h3>
                            <h4 className="vertical-timeline-element-subtitle">Working holiday visa program</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="02/2016"
                            icon={<i class="fas fa-graduation-cap"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Graduation, AGH</h3>
                            <h4 className="vertical-timeline-element-subtitle">bechelor degree</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="09/2015"
                            icon={<i class="fas fa-globe-europe"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">ZLOMBOL, Spain</h3>
                            <h4 className="vertical-timeline-element-subtitle">Charity Race</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            date="05/2015"
                            icon={<i class="fas fa-globe-europe"></i>}
                        >
                            <h3 className="vertical-timeline-element-title">Autostop Race, Greece</h3>
                            <h4 className="vertical-timeline-element-subtitle">Hitchhike to the Greece</h4>
                            <p className="vertical-timeline-element-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                        </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 18, 48)' }}
                            iconStyle={{ background: 'rgb(4, 18, 48)', color: 'seashell', fontSize: '1.8rem', }}
                            icon={<i class="fas fa-globe-europe"></i>}
                        />
                    </VerticalTimeline>

                </div>
            </div>
        </div>
    )
};

export default About;