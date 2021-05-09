import React, { Component } from "react";
import styled from "styled-components";
import { DataConsumer } from "../context";
import Handle from "./Handle";
import "./work.css"

class Works extends Component {
  render() {
    return (
      <WorKProfile>
        <img className="backdisplay" src="../images/dark.jpg" alt="background" />
        <div className="profile_body">
            <h3><span>Some</span> of my <span>projects</span></h3>
            <div className="board"></div>
            <h2>Here are a few of my works. click the button links to view sites or view code</h2>
            <div className="work_content">
            <DataConsumer>
            {(value) => {
                return value.profile.map(each=>{
                    return <Handle key={each.id} content={each} />
                })
            }}
            </DataConsumer>
            </div>
        </div>
      </WorKProfile>
    );
  }
}

export default Works;
const WorKProfile = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  
`;
