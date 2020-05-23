import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBAnimation } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../index.css";
import logo from"./images/undraw_camera_mg5h.svg"
const images = [
  "https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(150)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(152)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(42)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(40)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(148)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.jpg"
];

const smallImages = [
  "https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(150)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(152)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(42)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(40)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(148)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.jpg",
  
];

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
      <MDBContainer>
          <br/><br/>
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
                  Image Gallery
              </div>
          </MDBCol>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 

          {
            smallImages.map((value,index)=>{
              return (
            <MDBCol md="4">
              <figure>
              <MDBAnimation reveal type="fadeIn">
                <img
                  src={smallImages[index]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: index, isOpen: true })
                  }
                />
                </MDBAnimation>
              </figure>
            </MDBCol>
              )
              })
          }

          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;