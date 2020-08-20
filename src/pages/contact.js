import React from 'react'
class ContactForm extends React.Component {
  render() {
    const formStyle = {
      alignSelf: 'center',
      width: "100%",
    }
    const inputStyle = {
        width: "100%"
    }
    const buttonStyle = {
        alignSelf: 'center',
        backgroundColor: '#0066f9',
        color: '#fff',
        width: 350,
        height: 40
    }
    return (
      <form style={formStyle} className="form" name="contact" method="POST" data-netlify="true">
        <div>
          <label>Your Name:</label><br/>
          <input style={inputStyle} type="text" name="fullname"/>
        </div>
        <div>
          <label>Your Email:</label><br/>
          <input style={inputStyle} type="email" name="email"/>
        </div>
        <div>
          <label>Message</label><br/>
          <textarea style={inputStyle} name="message" rows="5"></textarea>
        </div>
        <div>
          <button style={buttonStyle} type="submit"  className="button special">Send</button>
        </div>
      </form>
    );
  }
}

export default ContactForm

