import React from "react";
import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [error, setError] = useState("");
  const [popUp, setPopUp] = useState("");

  const showPopUp = (event) => {
    event.preventDefault();
    console.log(event);
    event.target.reset();
    setPopUp(popUp === "" ? "popup" : "");
    setTimeout(() => {
      setPopUp("");
    }, 3000);
  };

  const toggleError = () => {
    setError(error === "" ? "error" : "");
  };

  return (
    <div>
      <div className="contactUs__container">
        <div className="contactUS__row">
          <div className="contactUs__wrapper">
            <div className="contactUs__headingAndSupport">
              <h1 className="heading">Contact Me</h1>
              <p className="subheading">
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </div>
            <div className="form__wrapper">
              <form className="myForm" onSubmit={showPopUp}>
                <div className="form__fields">
                  <div className="name__row child">
                    <div className="first__name">
                      <div className="input__withLabel">
                        <label>First name</label>
                        <input
                          required
                          className="input"
                          id="first_name"
                          type="text"
                          placeholder="Enter your first name"
                        />
                      </div>
                    </div>
                    <div className="last__name">
                      <div className="input__withLabel">
                        <label>Last name</label>
                        <input
                          required
                          className="input"
                          id="last_name"
                          type="text"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="email__container child">
                    <div className="input__withLabel">
                      <label>Email</label>
                      <input
                        required
                        className="input"
                        type="email"
                        id="email"
                        placeholder="yourname@email.com"
                      />
                    </div>
                  </div>
                  <div className="message__container child">
                    <div className="input__withLabel">
                      <label>Message</label>
                      <textarea
                        required
                        className={`input ${error}`}
                        type="text"
                        id="message"
                        rows={3}
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                      />
                    </div>
                  </div>
                  <div className="checkbox__container child">
                    <input
                      required
                      className="custom__checkbox"
                      type="checkbox"
                    />
                    <label className="policyAgree">
                      You agree to providing your data to Sahil Panhotra who may
                      contact you.
                    </label>
                  </div>
                </div>
                <div className="btn__wrapper">
                  <button className={`btn`} id="btn__submit">
                    Send Message
                  </button>
                  <div className={`popUp--hiden ${popUp}`}>Submitted</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
