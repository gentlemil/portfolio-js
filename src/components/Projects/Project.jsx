import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Button from '../Button/Button';
import '../../../node_modules/semantic-ui-css/semantic.css';
import './Project.scss';

const Project = props => {

    return (
        <Grid.Row data-aos="fade-down" className='grid__row'>
            <Grid.Column className='project-image' mobile={16} tablet={5} computer={6}>
                <Image className='image-size-landscape' src={props.image} alt="image" />
            </Grid.Column>

            <Grid.Column className='project-image' mobile={16} tablet={3} computer={3} >
                <Image className='image-size' src={props.imageMobile} alt="imageMobile" />
            </Grid.Column>

            <Grid.Column mobile={16} tablet={5} computer={7} className='text-column'>
                <h3 className='project-name'>{props.name}</h3>
                <p className='project-shortcut'>{props.description}</p>
                <div className='buttons' style={{ padding: '0 25%' }}>
                    <Button name='WEBSITE' path={props.buttonPath} />
                    <Button name='CODE' path={props.buttonCodePath} />
                </div>
            </Grid.Column>
        </Grid.Row>
    )
};

export default Project;
