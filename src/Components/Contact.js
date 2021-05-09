import React, { Component } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import "./Contact.css";
import styled from "styled-components";

class Contact extends Component {
  render() {
    return (
      <ContactWrap>
        <div className="contact">
          <div className="contact_text_box">
            <h3>
              Contact <span>Me</span>
            </h3>
            <div className="border"></div>
            <p>
              I am open to freelancing roles, contract agreement and full time
              roles in any company and project that would require my skillset.
              Got an idea?! hit me up so we can build something awesome. You can
              also just reach out through any of my social media handles to say
              Hi, I love to talk about tech and intresting stuff too
            </p>
            <div className="icon_wrap">
              <IoLogoWhatsapp className="icon" size="2em" color="goldenrod" />
              <AiFillGithub className="icon" size="2em" color="goldenrod" />
              <AiFillLinkedin className="icon" size="2em" color="goldenrod" />
              <AiTwotoneMail className="icon" size="2em" color="goldenrod" />
            </div>
          </div>
          <div className="text_fields">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea type="text" placeholder="Message" />
            <button type="submit">Send</button>
          </div>
        </div>
      </ContactWrap>
    );
  }
}

export default Contact;
const ContactWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../images/dark.jpg");
  backdrop-filter: blur(0.2rem);
`;
