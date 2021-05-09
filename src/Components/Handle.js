import React, { Component } from "react";
import Slides from "./Slides";


class Handle extends Component {
  render() {
    const { id } = this.props.content;
    return (
      <div className="handle_container">
        <Slides key={id} content={this.props.content} />
      </div>
    );
  }
}

export default Handle