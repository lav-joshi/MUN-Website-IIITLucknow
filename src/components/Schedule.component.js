import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol,MDBAnimation } from "mdbreact";
import "../index.css";
import Navbar from "./NavBar.component";

import logo from"./images/undraw_timeline_9u4u.svg"

class Sponsors extends Component {
    render() {
        return (
          <>
          <Navbar/>
        <MDBContainer>
               <br/><br/><br/><br/>
        <div className="mdb-lightbox no-margin">
          <MDBRow>
          <MDBCol lg="12" md="6" sm="4">
              <figure>
              <MDBAnimation reveal type="zoomIn">
                <img
                  src={logo}
                  alt="Gallery"
                  className="img-fluid"
                />
                </MDBAnimation>
              </figure>
          </MDBCol>
        </MDBRow>
        </div>
        <h1 className="masti">Coming Soon</h1>
        </MDBContainer>
        </>
        )
    }
}

export default Sponsors

