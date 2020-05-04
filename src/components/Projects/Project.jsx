import React from 'react'
import Button from '../Button/Button'
import Plantastic from '../../images/projects/plantastic.png'
const Project = props => {

    return (
        <div className="card" data-aos="fade-down">
            <div className='image'>
                <img src={props.image} alt="plantastic" />
            </div>
            <div className='content'>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                {/* <Button name='WEBSITE' path={''} /> */}
                <Button name='WEBSITE' path={props.buttonPath} />
            </div>
        </div>
    )
};

export default Project;
