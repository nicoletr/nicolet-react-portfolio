import React, { useState } from "react";
import "../../styles/Contact.css";
import "../../styles/media-queries.css";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Please fill out both name and email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Thanks for contacting me ${name}! I will be in touch soon :)`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="contact-container">
      <div className=" text-center mt-5 ">
        <h1>drop me a line...</h1>
      </div>
      <div className="row">
        <div className="col-10 col-lg-7 mx-auto">
          <div className="card-body custom-card">
            <div className="container">
              <form id="contact-form">
                <div className="controls">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label for="form_name">name</label>
                        <input
                          className="form-input"
                          value={name}
                          name="name"
                          onChange={handleInputChange}
                          type="text"
                          placeholder="name"
                          required="required"
                          data-error="name is required."
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label for="form_lastname">email</label>
                          <input
                            className="form-input"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="email"
                            required="required"
                            data-error="email is required."
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label for="form_message">message</label>
                            <textarea
                              className="form-input"
                              id="message-input"
                              value={message}
                              name="message"
                              onChange={handleInputChange}
                              type="text"
                              placeholder="message"
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn custom-btn"
                          value="Send!"
                          onClick={handleFormSubmit}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
