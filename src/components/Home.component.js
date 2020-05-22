import React, { Component } from 'react'
import Carousel from "./Carousel.component.js"
import Testimonial from './Testimonial.component.js'
import Director from "./Director.component"
import Feature from "./Feature.component"
import 'mdbreact/dist/css/mdb.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                  <Carousel/>
                </div>
                <div>
                    <Director/>
                </div>
                <div>
                    <Feature/>
                </div>
                <div>
                <Testimonial/>
                </div>
            </div>
        )
    }
}

export default Home
