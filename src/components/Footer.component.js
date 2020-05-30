import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import '../index.css';
const FooterPagePro = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small lighten-3 pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="4" lg="4">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Our Goal and Our Mission
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi,
              veritatis totam voluptas nostrum.{" "}
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold"></h5>
            <ul className="list-unstyled">
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" /> IIIT Lucknow  
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> lit2019023@iiitl.ac.in
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +91 92050 22830
            </p>
           
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow us
            </h5>
            <div className="mt-2 ">
            <a className="btn-floating btn-sm btn-dribbble mx-1" href="https://www.facebook.com/equinoxworldmun">
                <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-color-facebook fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
            </a><br/><br/>
            <a className="btn-floating btn-sm btn-dribbble mx-1" href='https://www.instagram.com/equinoxworldmun/'>
                <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-color-instagram fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
            </a>

            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> IIIT Lucknow Model United Nations</a><br/>
          Created and maintained by:<a href="https://github.com/lav-joshi"> lav-joshi</a> & <a href="https://github.com/yadavashu">yadavashu</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;

{/* <li className="list-inline-item">
<a className="btn-floating btn-sm btn-dribbble mx-1">
<span className="fa-stack fa-2x">
<i className="fas fa-circle fa-stack-2x"></i>
<i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
</span>
</a>
</li> */}