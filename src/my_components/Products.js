import "./products.css";
import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Subscribe from './Subscribe';
const Products = () => {
  return (
    <>
      <div className="heading">
        <h1>Get access to these technologies and learn with us!</h1>
      </div>
      <Subscribe />
      <section id="boxes">
        <div class="contain">

          <Card className="box" style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" />
            <Card.Body>
              <Card.Title>HTML 5</Card.Title>
              <Card.Text>
                Get the courses of Html
              </Card.Text>
            </Card.Body>
          </Card>
         

          <Card className="box" style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png" />
            <Card.Body>
              <Card.Title>CSS 3</Card.Title>
              <Card.Text>
                Style your website with us!
              </Card.Text>
            </Card.Body>
          </Card>
                   <Card className="box" style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://static.javatpoint.com/bootstrappages/images/bootstrap-tutorial.png" />
            <Card.Body>
              <Card.Title>Bootstrap</Card.Title>
              <Card.Text>
                And make it super easy with Bootstrap!
              </Card.Text>
             
            </Card.Body>
          </Card>
        

          <Card className="box" style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
            <Card.Body>
              <Card.Title>ReactJS</Card.Title>
              <Card.Text>
                And value to your project using ReactJS
              </Card.Text>
             
            </Card.Body>
          </Card>
         


          <Card className="box" style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://splendornet.com/wp-content/uploads/2019/01/django.png" />
            <Card.Body>
              <Card.Title>Django</Card.Title>
              <Card.Text>
                In demand backend framework
              </Card.Text>
             
            </Card.Body>
          </Card>
          <Card style={{ width: '10rem' }} className="box">
            <Card.Img variant="top" src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" />
            <Card.Body>
              <Card.Title>MySQL</Card.Title>
              <Card.Text>
                Best suited database manager for your project1
              </Card.Text>
             
            </Card.Body>
          </Card>

        </div>
      </section>
    </>

  )
};

export default Products;

