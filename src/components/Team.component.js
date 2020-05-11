import React,{Component} from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

class Team extends Component{
  render(){
    return (
      <MDBCard className="my-5 px-5 pb-1 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow className="text-md-left">
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://scontent.fdel3-2.fna.fbcdn.net/v/t1.0-9/p960x960/89259388_2923694377681719_56936156650012672_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=Mga4JdOtJVcAX_kc_U6&_nc_ht=scontent.fdel3-2.fna&_nc_tp=6&oh=b7ffd44cf6fbb286003b704e9e869b2e&oe=5EE00236"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Saksham Varshney</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://scontent.fdel3-2.fna.fbcdn.net/v/t1.0-9/p960x960/87000079_2894170974032432_6790876287532531712_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=I9hFrHu6cLEAX-JWy00&_nc_ht=scontent.fdel3-2.fna&_nc_tp=6&oh=7419365c4e5c92feaac39c3aa52d2335&oe=5EDF0218"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Hriday Grover</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Deputy Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg yt-ic">
                  <MDBIcon fab icon="youtube" />
                </a>
                <a href="#!" className="p-2 fa-lg ins-ic">
                  <MDBIcon fab icon="instagram" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/s960x960/78050074_795505414242423_4031121996103286784_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=TL5iVJhos9sAX-0-kSl&_nc_ht=scontent.fdel3-1.fna&_nc_tp=7&oh=1341154b38da4ea8025cd0a30166e480&oe=5EE0B4BA"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Vinamr Bajaj</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Deputy Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg github-ic">
                  <MDBIcon fab icon="github" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Anshul Garg</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Front-end Developer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg gplus-ic">
                  <MDBIcon fab icon="google-plus-g" />
                </a>
                <a href="#!" className="p-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="p-2 fa-lg email-ic">
                  <MDBIcon icon="envelope" />
                </a>
              </MDBCol>
            </MDBCol>
            
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Niharika Kabra</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://scontent.fdel3-2.fna.fbcdn.net/v/t1.0-9/81219121_1520543048092836_8508370732097470464_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=ePMvv36EsjAAX84Acqx&_nc_ht=scontent.fdel3-2.fna&oh=eac91ca85903eb45796e24e8b710c584&oe=5EE041BC"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Sarthak Singh</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Riya Srivastava</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Bhanu Prakash Singh</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/p960x960/84677204_806323326509899_811703975190462464_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=uGOJqpq21BEAX8-VB-7&_nc_ht=scontent.fdel3-1.fna&_nc_tp=6&oh=4edbcb937fc03adfbca1ec2106efbc30&oe=5EDEE7F9"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Lav Joshi</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://scontent.fdel3-2.fna.fbcdn.net/v/t1.0-1/67340970_334796617396245_4220567205323997184_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=eriqVO26oegAX83iYOT&_nc_ht=scontent.fdel3-2.fna&oh=95799aa208cc4c587d00abe94cf3ecd0&oe=5EDE79D9"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Ashutosh Yadav</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Hritwik Tripathi</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <MDBAvatar
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Yash Sahu</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Secretary General
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>
  
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
 
export default Team;