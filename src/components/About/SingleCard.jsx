import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './SingleCard.scss';

const SingleCard = props => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'linear-gradient(135deg, rgba(4, 21, 69, 1) 0%, rgba(9, 41, 136, 0.75) 79%, rgba(6, 34, 117, 1) 100%)', color: 'seashell' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(4, 21, 69, 1)' }}
            iconStyle={{ background: 'rgba(4, 21, 69, 1)', color: 'seashell', fontSize: '1.8rem', }}
            date={props.date}
            icon={<i class={props.icon}></i>}
        >
            <h3 className="vertical-timeline-element-title">{props.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">{props.position}</h4>
            <p className="vertical-timeline-element-description">{props.description}</p>
        </VerticalTimelineElement>
    )
};

export default SingleCard;
