import React from 'react'
import Products from './Products'
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from 'react-bootstrap';
import "./home.css";
function Home() {
    return (
        <>
         {/* <div className="showcase">
        <img class="video-feature--mobile-img" src="https://thumbs.dreamstime.com/z/web-design-background-pattern-vector-color-illustration-70776238.jpg" alt="Aerial view of campus" />
        <div className="para"> 
        <h1 className="pheading">Learn Designing with AmeWeb</h1> </div>
        </div> */}
  <div className="showcasediv">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://files.techmahindra.com/static/img/techm-cyber-security-banner.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Learn Designing With Ameweb</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://files.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg"
    />

    <Carousel.Caption>
      <h3>Gear up your skills!</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://content.techgig.com/photo/83982672.cms"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Explore new technologies.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    
    
   
<Products/>
    </>
    )
}

export default Home



