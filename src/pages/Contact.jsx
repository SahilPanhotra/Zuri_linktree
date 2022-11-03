import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <div>
      <div className="contactUs__container">
        <div className="contactUS__row">
          <div className="contactUs__wrapper">
            <div className="contactUs__headingAndSupport">
              <h1 className="heading">Contact Me</h1>
              <p className="subheading">Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <div className="form__wrapper">
              <form >
                <div className="form__fields">
                  <div className="name__row child">
                    <div className="first__name">
                      <div className="input__withLabel">
                        <label>First name</label>
                        <input className="input" id="first__name" type="text" placeholder="Enter your first name" />
                      </div>
                      </div>
                      <div className="last__name">
                      <div className="input__withLabel">
                        <label>Last name</label>
                        <input className="input" id="last__name" type="text" placeholder="Enter your last name" />
                      </div>
                      </div> 
                  </div>
                
                <div className="email__container child">
                  <div className="input__withLabel">
                    <label >Email</label>
                    <input className="input" type="email" id="email" placeholder="yourname@email.com" />
                  </div>
                </div>
                <div className="message__container child">
                  <div className="input__withLabel">
                    <label >Message</label>
                    <textarea className="input" type="text" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." />
                  </div>
                </div>
                <div className="checkbox__container child">
                  <input className="input__checkbox" type="checkbox" />
                  <span className="policyAgree">You agree to providing your data to Sahil Panhotra who may contact you.</span>
                </div>
                </div>
                <button className="btn" id="btn__submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;