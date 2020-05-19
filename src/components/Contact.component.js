import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput ,MDBContainer,MDBAnimation} from "mdbreact";
import logo from"./images/undraw_contact_us_15o2.svg"
import "../index.css";
const ContactPage = () => {
  return (
    <MDBContainer>  
        <br/>                

    <section className="my-5">
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
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfN3xkZrPf2fTGlJvA5QIeWqi2-eafmlhpLh2mV8IEnxhHDYQ/viewform?embedded=true" width="500" height="947" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
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
         
          <br />
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
    </section>
    </MDBContainer>
  );
}

export default ContactPage;