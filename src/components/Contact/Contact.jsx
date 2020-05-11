import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Axios from 'axios';
import '../../../node_modules/semantic-ui-css/semantic.css';
import './Contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };


    handleSubmit = event => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    };


    render() {

        return (
            <div className='contact'>
                <div className='frameBox' >
                    <div className='frameBox__title'>
                        <h1>CONTACT</h1>
                        <h4>wanna hire me, small talk, chit chat?</h4>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal' style={{ paddingBottom: '20px' }}>
                            <Form.Input
                                fluid
                                name="name"
                                value={this.state.name}
                                placeholder='Jan Kowalski'
                                onChange={this.handleChange.bind(this, 'name')}
                            />
                            <Form.Input
                                fluid
                                name="email"
                                value={this.state.email}
                                placeholder='jan@kowalski.com'
                                onChange={this.handleChange.bind(this, 'email')}
                            />
                        </Form.Group>
                        <Form.TextArea
                            name="message"
                            value={this.state.message}
                            placeholder='share your ideas with me'
                            rows='8'
                            onChange={this.handleChange.bind(this, 'message')}
                        />
                        <Form.Button style={{ marginTop: '20px' }} >SEND</Form.Button>
                    </Form>
                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                </div>
            </div>
        );
    };
};

export default Contact;