import React, { Component } from "react";
import { ProfileContent } from "./data";

const DataContext = React.createContext();

class DataProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trigger: false,
      profile: ProfileContent,
    };
  }

  openContact = () => {
    this.setState(() => {
      return { trigger: true };
    });
  };
  closeContact = () => {
    this.setState(() => {
      return { trigger: false };
    });
  };
  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          openContact: this.openContact,
          closeContact: this.closeContact,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };
