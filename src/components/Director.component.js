import React from "react";
import {  MDBRow, MDBCol, MDBIcon , MDBAnimation } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-5">
       <MDBAnimation  reveal type="zoomIn" duration="500ms" delay="0.5s">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why our MUN is so Special ? 
        </h2>
        </MDBAnimation>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
          <MDBAnimation  reveal type="slideInLeft" duration="500ms" delay="1s">
            <img
              className="img-fluid shadow-box-example hoverable"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
            </MDBAnimation>
          </MDBCol>
          <MDBCol lg="7">
          <MDBAnimation  reveal type="slideInRight" duration="500ms" delay="1.5s">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Hello</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Hello</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>

            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Hello</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;