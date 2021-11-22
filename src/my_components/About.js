import React from 'react'
import "./aboutus.css";
import {Carousel} from 'react-bootstrap';
export default function About() {
    return (
        <>
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
        <div>
             <section id="about">
        <div class="container">
            <article id="title">
                <h1>About Us</h1>

                <p class="p2">

                    We are here to make your Web Development journey easier. We and you are alike feel free to join our community and outshine your skills.
                </p>


                <p class="p2">
                   At Ameweb we all come to work everday in order to fulfill your dreams. Our mission at Amewb is to reach out to the maximum youth and encourage them to learn the innovative technologies.We provide access to various web development tools and teach you how to use them. We want that the knowledge of ours is shared to as many people as possible.
                </p>

            </article>


            <aside id="sidebar">
                <h1>What we do?</h1>
                <p>

                    We at Ameweb provide the course content of web developing languages, various frameworks, a good mentorship, live interaction, amazing projects and many more. 
                </p>
            </aside>
        </div>

    </section>
        </div>
        </>
    )
}
