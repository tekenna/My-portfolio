import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import "./Home.css";

function Home() {
  return (
    <HomeContainer>
      <img className="bg" src="./images/dark.jpg" alt="" />
      <div className="home_content_wrap">
        <h4>Hi</h4>
        <h2>
          I'm kada jeremiah <span>tekenna</span>
        </h2>
        <p>
          <span> Front end</span> react.js developer
        </p>
        <div className="icon_wrap">
          <IoLogoWhatsapp size="2em" color="green" />
          <AiFillGithub size="2em" color="gray" />
          <AiFillLinkedin size="2em" color="rgb(59, 59, 236)" />
          <AiTwotoneMail size="2em" color="rgba(255, 0, 0, 0.562)" />
        </div>
        <div className="buttons">
          <Link to="/contact">
            <button>Hire Me</button>
          </Link>
          <Link to="/about">
            <button id="btn">explore</button>
          </Link>
        </div>
        <p className="bottom">Designed by Tekenna All Rights Reserved © 2020</p>
      </div>
    </HomeContainer>
  );
}

export default Home;
const HomeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;
