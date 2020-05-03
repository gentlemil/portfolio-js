import React from 'react';
import Button from '../Button/Button';
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
                            <p className="vertical-timeline-element-description">During a summer season in 
                            Iceland I was working for few months in a kitchen in one of the most hotels in 
                            Iceland. In my free time I was hitchhiking, meeting new people, hiking
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
                                After a year I got a invitation to become a team member during the same competition.
                            
                            </p>
                            <div className='buttons-about'>
                                <Button name='OFFICIAL WEBSITE' />
                            </div>
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
                                During travelling across Thailand I went to Chiang Rai to see Balloon Fiesta and international
                                competition. Few hours after arriving and small chit-chat with one american team a become
                                a team member. That year we won competition.
                            </p>
                            <div className='buttons-about'>
                                <Button name='OFFICIAL WEBSITE' />
                            </div>

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
                                Definitely it was my life changing experience. I've been living at school, sleeping in HeadMaster office,
                                eating meals with teaching stuff, teaching kids few hours per day and playing football with them.
                                My free time I was spending mostly with teachers who become my friends, my family which I hope to see
                                again one day.
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
                                I and my companion hitchhiked to Hanoi from China. (not easy but possible). I bought motorbike, made fake stamp
                                in my driving license cat. A and I drove south to Ho Chi Minh (Sajgon) where I spent christmas
                                time.
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
                                My adventure with Asia started in Singapure. Jack Sparrow says that best things
                                happens there, and he has right, totally. Later I moved to Malaysia, Kaula Lumpur,
                                Hindi templates and tea plantations. Phillipins - beautiful woman, magnificent beaches
                                and sunset, ridiculisly cheap rum and people, awesome people. Hong Kong and China.
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
                                Two weeks in definitely not enough to see everything I wanted in Australia, but I'm glad
                                I did it anyway. I saw divirsity of Melbourgh, beauty of Sydney, magnificence of Australian
                                nature.
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
                                Few weeks after graduation I packed my backpack, printed my flight ticket and finally
                                my fream came true. I moved to New Zealand where for few months I worked on the vineyard
                                as a member of international crew. For another few months I was travelling around island,
                                sleep in a car, eat in a car, wash in a..., well, not in a car but in a river being like
                                Alexander Supertramp.
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
                                I got my engineer degree in automatics and robotics field. Read more in my Resume.
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
                            Złombol is a charity race, the income from which is allocated to children from orphanages. There 
                            would be nothing unusual about it if it wasn't for the fact that in order to take part in these 
                            car races one has to have a car made in the People's Republic of Poland or the GDR. Together with 
                            five friends we decided to face the rest of the participants and go to Spain with our Żuk.
                            </p>
                            <div className='buttons-about'>
                                <Button name='OFFICIAL WEBSITE' />
                                <Button name='OUR VIDEO' />
                            </div>
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
                            Autostop Race is a student competition in which a thousand of people race on a specific route that 
                            they can hitchhike through. During such an expedition a person learns to overcome their fears as 
                            well as exercises patience and humility. Openness to new people and new situations is obligatory. 
                            Together with my companion we reached the finish line in 3 days.
                            </p>
                            <div className='buttons-about'>
                                <Button name='OFFICIAL WEBSITE' />
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                </div>
            </div>
        </div>
    )
};

export default About;