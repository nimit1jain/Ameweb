import React from 'react'
import "./contact.css";
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
export default function Contact() {
    return (
        <>

            <div className="cont">
                <div className="chotu">

                    <h1 className="heading1"> Please give us your suggestions and feedback.</h1>
                    <h1 className="heading1"> Feel free to contact us.</h1>
                </div>
               
                <div id="submit">
                  <h1>Submit your queries.</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name...." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email...." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Send us your query</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Write your query here...." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
