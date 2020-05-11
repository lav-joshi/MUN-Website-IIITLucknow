import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Navbar from "./components/NavBar.component";
import Team from "./components/Team.component";
import Home from "./components/Home.component";
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/><br/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/team" exact component={Team}/>
        </Switch>
        
      </Router>
    );
  }
}

export default App;
