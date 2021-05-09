import React from "react";
import "./About.css";
import styled from "styled-components";

function About() {
  return (
    <AboutContainer>
      <img className="background" src="../images/dark.jpg" alt="" />
      <div className="about_section">
        <h2 className="h2">
          About <span> me</span>
        </h2>
        <div className="board"></div>
        <div className="about">
          <p className="p">
            I am a design-minded, detail oriented web developer passionate about
            combining beautiful, structured codes with nice interfaces and
            desired fuctionalities. I have experience developing and designing
            web interfaces from simple landng pages to multi-paged web
            applications. I always strive to create software that not only
            functions efficiently, but also provides intuitive and perfect user
            experiences. I love learning new and better ways to create seamless
            user experiences with clean and efficient codes. I am open to
            learning and self development and in the process lay on impact on
            any community I'm working in. I'm always looking for opportunities
            to work with those willing to share their knowledge as much as I
            want to learn.
          </p>
          <img src="../images/me.jpg" alt="sdfgh" />
        </div>
      </div>
      <div className="Services">
        <h1 className="h1">My Sevices</h1>
        <div className="service_wrap">
          <div className="wrap">
            <img src="../images/front.jpeg" alt="frontend" />
            <small>Front end web development</small>
            <p className="p2">
              Using the Front End Trio [HTML, CSS and JavaScript] with
              pre-processors and build tools such as SCSS, I efficently
              implement Web Designs along with its functionalities. I also make
              utilise other tools such as Bootstrap and Material UI to ensure i
              deliver responsive web pages. I am equally proficient in the
              javascript library like React JS and React JSLibraries to build
              component based Single Paged Web Applications.
            </p>
            <div className="skills">
              <span>HTML </span>
              <span> CSS</span>
              <span>Bootstrap</span>
              <span>Javascript</span>
              <span>React JS</span>
            </div>
          </div>
          <div className="wrap">
            <img src="../images/back.jpg" alt="frontend" />
            <small>Back end development</small>
            <p className="p2">
              Using Node js for backend or serverside language with frames works
              like Express, EJS, NodeMon and some other npm packages. Also
              working with noSQL database with eperience from python and the
              Kivy frame work and deploying of websites using netlify and other
              free hosting services
            </p>
            <div className="skills">
              <span>Node js</span>
              <span>Express</span>
              <span>Git and GitHub</span>
              <span>MongoDB</span>
              <span>Python</span>
              <span>Kivy MD</span>
            </div>
          </div>
        </div>
        <p className="bottom">Designed by Tekenna All Rights Reserved © 2020</p>
      </div>
    </AboutContainer>
  );
}

export default About;
const AboutContainer = styled.div`
  color: white;
  padding: 0;
  margin: 0;
  position: relative;
  .board {
    border-bottom: 2px solid goldenrod;
    width: 2rem;
  }
`;
