import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    if (!name || !email) {
      setLoading(false);

      if (!name) {
        let nameError = document.getElementById("name-err");
        nameError.style.display = "block";
      }

      if (!email) {
        let emailError = document.getElementById("email-err");
        emailError.style.display = "block";        
      }

      return;
    }

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 id="contact" className="form-sec-head">
        LET'S <span>CONTACT</span> WITH ME
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.personalemail} alt="email" />
          <a href="mailto:aliismail30sep@gmail.com">aliismail30sep@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:0348-2078587">(+92) 348 2078587</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
            <p className="error" id="name-err">
              Please fill out this field
            </p>
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            required 
            />
            <p className="error" id="email-err">
              Please fill out this field
            </p>
          </div>
          <div className="app__flex">
            <textarea
              name="message"
              placeholder="Your message"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <div className="app__buttons">
            <button type="button" onClick={handleSubmit}>
              {loading ? "Sending" : "Send message"}
            </button>
            <a className="resume-link" href="https://resume.io/r/73UxP1tNS" target="_blank">
              View Resume
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="head-text" style={{ marginBottom: 80 }}>
            Thank you for getting in touch !
          </h2>
        </div>
      )}
         <div className="footer" style={{textAlign: 'center', padding: '20px', borderTop: '1px solid #444'}}>
      <p>© 2020 - {new Date().getFullYear()} All Right Reserved - Portfolio By Ali Dev.</p>
    </div>
    </>
  );
};

export default Footer;
