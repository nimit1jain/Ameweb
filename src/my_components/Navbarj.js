import React, { useState } from 'react'

import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Navbarj() {
    // const [isDropDownOpen,setDropDownOpen] = useState(false);
    // const [isNavOpen, setNavOpen] = useState(false);
    // const dropDownChangeHandler = () => {
    //     setDropDownOpen(()=>(!isDropDownOpen));
    // }

    // const navChangeHandler = () =>{
    //     setNavOpen(()=>(!isNavOpen));
    // }

    return (
<>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand> <Link to ="/"> Ameweb </Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><Link to ="/"> Home </Link></Nav.Link>
        <Nav.Link ><Link to ="/about"> About Us </Link></Nav.Link>
        <Nav.Link ><Link to ="/services"> Services </Link></Nav.Link>
        <Nav.Link ><Link to ="/products"> Products </Link></Nav.Link>
        <Nav.Link ><Link to ="/contact"> Contact Us </Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    )
}

export default Navbarj