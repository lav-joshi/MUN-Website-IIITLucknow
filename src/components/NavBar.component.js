import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router ,Link} from 'react-router-dom';
import '../index.css';
class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar dark expand="md" className="fixed-top fuck" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">MUN</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem >
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/schedule">Schedule</MDBNavLink>
            </MDBNavItem>
    
            <MDBNavItem >
              <MDBNavLink to="/team">Team</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/gallery">Gallery</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="/sponsors">Sponsors</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="/contact">Contact Us</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;