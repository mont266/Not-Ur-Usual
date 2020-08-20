import React from 'react'

class ContactForm extends React.Component {
    constructor(props) {
    super(props)
    this.ContactForm = React.createRef()
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleSubmit = event => {
    event.preventDefault()
    const form = this.ContactForm.current
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("contact"),
        ...this.state,
      }),
    })
      .then(() => navigate("/"))
      .catch(error => alert(error))

    this.setState({
      name: "",
      email: "",
      message: "",
    })
  }

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
      <form action={this.handleSubmit} style={formStyle} className="form" name="contact" netlify netlify-honeypot="bot-field" data-netlify="true">
        <div>
          <label>Your Name:</label><br/>
          <input style={inputStyle} type="text" name="name"/>
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

