


import "./Form.scss";

import emailjs from "emailjs-com";
import React from 'react';

export default function Form() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_319q06k', 'template_1gkh5m6', e.target, 'user_1RqaaZ5iX8CJzcjhlsI6m')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="container__form">
                        <h1>Masz jakieś pytania?</h1>
                        <h2> Napisz do mnie !</h2>
                        <div className="contact form-group">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="contact form-group">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="contact form-group">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="contact form-group">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="contact button">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


// class Form extends React.Component {
//     constructor(props) {
//       super(props);
//        this.state = { feedback: '', name: '', email: '', message: '' };
// 	    this.onNameChange = this.onNameChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.onEmailChange = this.onEmailChange.bind(this);
//       this.onMessageChange = this.onMessageChange.bind(this);
//       }
    
  
//     render() {
//       return(
//         <div className="Form">
//           <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//             <div className="form-group">
//               <label className="name">Twoje imię</label>
//               <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//             </div>
//             <div className="form-group">
//               <label className="email@example.com">Adres e-mail</label>
//               <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//             </div>
//             <div className="form-group">
//               <label className="message">Wiadomość</label>
//               <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//             </div>
//             <button type="submit" className="btn btn-primary">Wyślij</button>
//           </form>
//         </div>
//       );
//     }
  
//     onNameChange(event) {
//       this.setState({name: event.target.value})
//     }

//     onEmailChange(event) {
//         this.setState({email: event.target.value})
//       }
      
//       onMessageChange(event) {
//         this.setState({message: event.target.value})
//       }
    
//       handleSubmit (event) {
//         const templateId = 'template_5m78nqs';
      
//         this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
//         }
      
//         sendFeedback (templateId, name, email, message) {
//         window.emailjs.send(
//           'gmail', templateId,
//           name, email, message
//           ).then(res => {
//             console.log('Email successfully sent!')
//           })
//           // Handle errors here however you like, or use a React error boundary
//           .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
//         }
//     }
    
//    export default Form;