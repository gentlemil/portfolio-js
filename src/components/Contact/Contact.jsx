import React from 'react';
import './Contact.scss'

class Contact extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { feedback: 'dupadupa', name: 'Milosz Bukala', email: 'mil.bukala@gmail.com' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ feedback: event.target.value })
    }

    handleSubmit(event) {
        const templateId = 'template_FZMNakmZ';

        this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    render() {
        return (
            <div className="projects">
                <div className='frameBox' >
                    <div className='frameBox__title'>
                        <h1>CONTACT ME</h1>
                        <h4>chit-chat ?</h4>
                    </div>
                    {/* --- */}
                    <form className="test-mailing">
                        <h1>Let's see if it works</h1>
                        <div>
                            <textarea
                                id="test-mailing"
                                name="test-mailing"
                                onChange={this.handleChange}
                                placeholder="Post some lorem ipsum here"
                                required
                                value={this.state.feedback}
                                style={{ width: '60%', height: '150px' }}
                            />
                        </div>
                        <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                    </form>
                    {/* --- */}

                </div>
            </div>
        )
    }


};

export default Contact;