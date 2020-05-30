import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
// import Navbar from "./components/NavBar.component";
import Test from "./components/test";
import Team from "./components/Team.component";
import Home from "./components/Home.component";
import Footer from "./components/Footer.component";
import Gallery from "./components/Gallery.component";
import Contact from "./components/Contact.component";
import Sponsors from "./components/Sponsors.component";
import Schedule from "./components/Schedule.component";
import 'mdbreact/dist/css/mdb.css';
class App extends Component {
  render() {
    return (
      <div >
      <Router>
        
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/team" exact component={Team}/>
        <Route path="/gallery" exact component={Gallery}/>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/sponsors" exact component={Sponsors}></Route>
        <Route path="/schedule" exact component={Schedule}></Route>
        </Switch>
        
       
        <div className="go-go-go">
        <Footer/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
