import React, { Component } from 'react'
import axios from 'axios'

const GOOGLE_FORM_MESSAGE_ID = 'entry.839337160'
const GOOGLE_FORM_EMAIL_ID = 'entry.979315351'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/5/d/e/1FAIpQLSd30RQDISVmDA5pzooQ26HzX6wfyylhXKLZrkJtR2u06EkAlA/formResponse'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: '',
            email: '',
            showForm: false,
            sendingMessage: false,
            messageSent: false,
            messageError: false
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            sendingMessage: true
        })
        this.sendMessage()
    }

    handleFormToggle = () => {
        this.setState(
            (prevState) => {
                const { showForm } = prevState
                return {
                    showForm: !showForm
                }
            }
        )
    }

    handleReturnButton = () => {
        this.setState(
            {
                showForm: false,
                messageSent: false,
                messageError: false
            }
        )
    }

    sendMessage = () => {
        const formData = new FormData()
        formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message)
        formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)

        axios.post(CORS_PROXY + GOOGLE_FORM_ACTION,formData)
            .then(() => {
                this.setState({
                    messageSent: true,
                    sendingMessage: false,
                    message: '',
                    email: ''
                })
            }).catch(() => {
            this.setState({
                messageError: true,
                sendingMessage: false
            })
        })
    }

    returnButton = () => <button id='return-button' style={{margin:"auto", display:"block"}} className='btn btn-default btn-xs' onClick={this.handleReturnButton}>Return</button>

    render() {
        if(this.state.sendingMessage){
            return(
                <div>
                    <h4 align='center'>Sending...</h4>
                </div>
            )
        }

        if(this.state.messageSent){
            return(
                <section id = 'contact'>
                    <React.Fragment>
                        <div className='success-message'><h4 align='center'>Sent! We will respond asap</h4></div>
                        {this.returnButton()}
                    </React.Fragment>
                </section>
            )
        }

        if(this.state.messageError){
            return(
                <section id = 'contact'>
                    <React.Fragment>
                        <div className='error-message'><h4 align='center'>Sorry, your message was not sent. Contact us at: foodin.dexterUs@gmail.com</h4></div>
                        {this.returnButton()}
                    </React.Fragment>
                </section>
            )
        }

        if(this.state.showForm === false){
            return(
                <section id = 'contact'>
                    <button id='contact-button' className='btn btn-sm' style={{margin:"auto", display:"block"}} onClick={this.handleFormToggle}>Contact</button>
                </section>
            )
        }

        return(
            <section id = 'contact'>
                <React.Fragment>
                    <div className='form-container'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group row'>
                                <label htmlFor='email' className='col-sm-2 col-form-label'>
                                    Email:
                                </label>
                                <div className='col-sm-8'>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='form-control'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label htmlFor='message' className='col-sm-2 col-form-label'>
                                    Message:
                                </label>
                                <div className='col-sm-8'>
                    <textarea
                        id='message'
                        name='message'
                        className='form-control'
                        required
                        value={this.state.message}
                        onChange={this.handleChange}
                        rows='6'
                    />
                                </div>
                            </div>
                            <div>
                                <button type='button' id='cancel-button' className='btn btn-default btn-sm btn-action' style={{margin:"auto", display:"block"}} onClick={this.handleFormToggle}>Cancel</button>
                                <button type='submit' style={{margin:"auto", display:"block"}} className='btn btn-sm btn-default btn-action'>Submit</button>
                            </div>
                        </form>
                    </div>
                </React.Fragment>
            </section>
        )
    }
}

export default Contact
