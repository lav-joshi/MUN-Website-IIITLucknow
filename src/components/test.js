import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Carousel from "./Carousel.component.js"
import "../index.css"
class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="stylish-color" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>MUN</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
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

          <Carousel/>
        </header>

       
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;