import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import SingleCard from './SingleCard';
import 'react-vertical-timeline-component/style.min.css';
import './About.scss';


class About extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            aboutData: [
                {
                    name: 'Club Drukarnia, Cracow',
                    position: 'Bartender',
                    date: '01/2019 - present',
                    description: "Preparing cocktails, latte art, cash handling, daily making ordersmfrom suppliers, creating a friendly atmosphere, making good and professional contact with the customers. I have learned responsibility, how to talk with clients, how to response quickly to new, unexpected situations an respect to the team.",
                    icon: "fas fa-briefcase",
                },
                {
                    name: 'Hotel Budir, Iceland',
                    position: 'Chef assistent',
                    date: "04/2018 - 08/2018",
                    description: "During a summer season in Iceland I was working for few months in a kitchen in one of the most hotels in Iceland. In my free time I was hitchhiking, meeting new people, hiking and looking for wild hot springs. ",
                    icon: "fas fa-briefcase",
                },
                {
                    name: 'International Balloon Fiesta 2018, Thailand',
                    position: 'Team Member',
                    date: '02/2018',
                    description: "After a year I got a invitation to become a team member during the same competition. ",
                    icon: "far fa-compass",
                },
                {
                    name: 'Artefakt Cafe, Cracow',
                    position: 'Bartender',
                    date: "04/2017 - 12/2017",
                    description: "Preparing cocktails, latte art, cash handling, daily making orders from suppliers, creating a friendly atmosphere, making good and professional contact with the customers. I have learned responsibility, how to talk with clients, how to response quickly to new, unexpected situations an respect to the team. ",
                    icon: "fas fa-briefcase",
                },
                {
                    name: 'International Balloon Fiesta 2018, Thailand',
                    position: 'Team Member',
                    date: '02/2017',
                    description: "During travelling across Thailand I went to Chiang Rai to see Balloon Fiesta and international competition. Few hours after arriving and small chit-chat with one american team a become a team member. That year we won competition. ",
                    icon: "far fa-compass",
                },
                {
                    name: 'โรงเรียนบ้านทุ่งแม่น้ำน้อย, Thailand',
                    position: 'English teacher',
                    date: "01/2017 - 02/2017",
                    description: "Definitely it was my life changing experience. I've been living at school, sleeping in HeadMaster office, eating meals with teaching stuff, teaching kids few hours per day and playing football with them. My free time I was spending mostly with teachers who become my friends, my family which I hope to see again one day.",
                    icon: "fas fa-briefcase",
                },
                {
                    name: 'Travel, Vietnam',
                    position: 'Driving on the motorbike through Vietnam',
                    date: 'December 2016',
                    description: "I and my companion hitchhiked to Hanoi from China. (not easy but possible). I bought motorbike, made fake stamp in my driving license cat. A and I drove south to Ho Chi Minh (Sajgon) where I spent christmas time. ",
                    icon: 'fas fa-motorcycle',
                },
                {
                    name: 'Hitchhike, South-East Asia',
                    position: 'Travel',
                    date: '10/2016 - 12/2016',
                    description: "My adventure with Asia started in Singapure. Jack Sparrow says that best things happens there, and he has right, totally. Later I moved to Malaysia, Kaula Lumpur, Hindi templates and tea plantations. Phillipins - beautiful woman, magnificent beaches and sunset, ridiculisly cheap rum and people, awesome people. Hong Kong and China.",
                    icon: 'fas fa-globe-asia',
                },
                {
                    name: 'Travel, Australia',
                    position: 'Hitchhike and explore south Australia',
                    date: '10/2016',
                    description: "Two weeks in definitely not enough to see everything I wanted in Australia, but I'm glad I did it anyway. I saw divirsity of Melbourgh, beauty of Sydney, magnificence of Australian nature.",
                    icon: "far fa-compass",
                },
                {
                    name: "Work & Travel, New Zealand",
                    position: "Working holiday visa program",
                    date: "03/2016 - 10/2016",
                    description: "Few weeks after graduation I packed my backpack, printed my flight ticket and finally my fream came true. I moved to New Zealand where for few months I worked on the vineyard as a member of international crew. For another few months I was travelling around island, sleep in a car, eat in a car, wash in a..., well, not in a car but in a river being like Alexander Supertramp.",
                    icon: 'fas fa-globe-asia',
                },
                {
                    name: "Graduation, AGH",
                    position: "bechelor degree",
                    date: "02/2016",
                    description: "I got my engineer degree in automatics and robotics field. Read more in my Resume.",
                    icon: 'fas fa-graduation-cap',
                },
                {
                    name: "09/2015",
                    position: "Charity Race",
                    date: "09/2015",
                    description: "Złombol is a charity race, the income from which is allocated to children from orphanages. There would be nothing unusual about it if it wasn't for the fact that in order to take part in these car races one has to have a car made in the People's Republic of Poland or the GDR. Together with five friends we decided to face the rest of the participants and go to Spain with our Żuk.",
                    icon: 'fas fa-globe-europe',
                },
                {
                    name: "Autostop Race, Greece",
                    position: "Hitchhike to the Greece",
                    date: "05/2015",
                    description: "Autostop Race is a student competition in which a thousand of people race on a specific route that they can hitchhike through. During such an expedition a person learns to overcome their fears as well as exercises patience and humility. Openness to new people and new situations is obligatory. Together with my companion we reached the finish line in 3 days.",
                    icon: 'fas fa-globe-europe',
                },
            ],
        }
    };

    render() {
        return (
            <div className='about' >
                <div className='frameBox' >
                    <div className='frameBox__title'>
                        <h1>ABOUT MYSELF</h1>
                        <h4>shortly who the hell I am</h4>
                    </div>
                    <div className='frameBox__content'>
                        <VerticalTimeline>
                            {this.state.aboutData.map(item =>
                                <SingleCard
                                    name={item.name}
                                    position={item.position}
                                    date={item.date}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            )}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;