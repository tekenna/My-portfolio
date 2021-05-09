import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";
import Home from "./Components/Home"
import About from "./Components/About"
import Works from "./Components/Works"
import Contact from "./Components/Contact"
import Nav from "./Components/Nav"

class App extends Component {
  
  render(){
    return(
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Works} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    )
  }
}

export default App;
