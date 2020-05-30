import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput ,MDBContainer,MDBAnimation} from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../index.css";
import logo from"./images/undraw_contact_us_15o2.svg"
import Navbar from "./NavBar.component";

class LightboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <>
      <Navbar/>
      <MDBContainer>
          <br/><br/><br/><br/>
        <div className="mdb-lightbox no-margin">
          <MDBRow>
          <MDBCol md="6" sm="4">
              <figure>
              <MDBAnimation reveal type="zoomIn">
                <img
                  src={logo}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
                </MDBAnimation>
              </figure>
          </MDBCol>

          <MDBCol md="6" className="gello">
              <div className="hello">
                  Contact Us
              </div>
          </MDBCol>
            <br/><br/><br/><br/><br/><br/><br/><br/>
          
          </MDBRow>
           {/* Next Address */}
        <MDBRow>
        <MDBCol>
        <iframe className="google-form"src="https://docs.google.com/forms/d/e/1FAIpQLSfN3xkZrPf2fTGlJvA5QIeWqi2-eafmlhpLh2mV8IEnxhHDYQ/viewform?embedded=true" height="947" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </MDBCol>
        <MDBCol lg="6">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2244080340733!2d81.02210511499547!3d26.800982333175764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1589923464930!5m2!1sen!2sin"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
         
          <br/>
                <MDBRow className="text-center">
                    <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                        <MDBIcon icon="map-marker-alt" />
                    </MDBBtn>
                    <p>Lucknow , 226002</p>
                    <p className="mb-md-0">Uttar Pradesh , India</p>
                    </MDBCol>
                    <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                        <MDBIcon icon="phone" />
                    </MDBBtn>
                    <p>+91 9205022830</p>
                    <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                    </MDBCol>
                    <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                        <MDBIcon icon="envelope" />
                    </MDBBtn>
                    <p>mun@iiitl.ac.in</p>
                    <p className="mb-md-0">lit2019023@iiitlac.in</p>
                    </MDBCol>
                </MDBRow>
        </MDBCol>
      </MDBRow>
   

        </div>
        
      </MDBContainer>
      </>
    );
  }
}

export default LightboxPage;