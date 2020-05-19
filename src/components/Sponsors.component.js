import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol,MDBAnimation } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../index.css";
import logo from"./images/undraw_collab_8oes.svg"

class Sponsors extends Component {
    render() {
        return (
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
        )
    }
}

export default Sponsors

