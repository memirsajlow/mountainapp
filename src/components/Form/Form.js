import React from 'react';

import "./Form.scss";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div className="Form">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label className="name">Twoje imię</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label className="exampleInputEmail1">Adres e-mail</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label className="message">Wiadomość</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Wyślij</button>
          </form>
        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
      handleSubmit(event) {
      }
    }
    
    export default Form;