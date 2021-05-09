import React from "react";
import styled from "styled-components";

const Slideshow = (props) => {
  const { title, discription, images, link, git } = props.content;

  return (
    <SlideStyle style={{ background: `url(${images})` }}>
      <div className="slide_bg">
        <div className="slide_wrap">
          <h3>{title}</h3>
          <p>{discription}</p>
          <div className="btn_links">
            <a href={link}>Live project</a>
            <a href={git}>View code</a>
          </div>
        </div>
      </div>
    </SlideStyle>
  );
};

export default Slideshow;
const SlideStyle = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`;
