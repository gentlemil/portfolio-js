import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
// import Button from '../Button/Button'
import { Button, Form, FormGroup, Input } from 'reactstrap';

import './Contact.scss';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, subject, message } = this.state

        let templateParams = {
            from_name: email,
            to_name: 'mil.bukala@gmail.com',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_FZMNakmZ',
            templateParams,
            'user_mEjqdIMTdyWs95cnj4A0W'
        )
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return (
            <div className='contact'>
                <div className='frameBox' >
                    <div className='frameBox__title'>
                        <h1>CONTACT</h1>
                        <h4>wanna hire me, small talk, chit chat?</h4>
                    </div>
                    <Form onSubmit={this.handleSubmit} className='form-content'>
                        <FormGroup controlId="formBasicEmail">
                            <Input
                                type="email"
                                name="email"
                                value={this.state.email}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'email')}
                                placeholder="Enter email"
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicName">
                            <Input
                                type="text"
                                name="name"
                                value={this.state.name}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'name')}
                                placeholder="Name"
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicSubject">
                            <Input
                                type="text"
                                name="subject"
                                className="text-primary"
                                value={this.state.subject}
                                onChange={this.handleChange.bind(this, 'subject')}
                                placeholder="Subject"
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicMessage">
                            <Input
                                type="textarea"
                                name="message"
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                                placeholder="share your thoughts with me"
                            />
                        </FormGroup>
                        <Button variant="primary" type="submit">SEND</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Contact;