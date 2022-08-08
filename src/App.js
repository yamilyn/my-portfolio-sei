import './App.css';
import './Animation.css';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Mainpage from './components/Mainpage';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';



export default function App() {
  return (
    <div>
      <Navbar className="nav-bar" sticky="top" expand="lg">
        <Container>
          {/* <Navbar.Brand className="nav-brand">
            <Link to="/#welcome">Logo</Link>
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-light ms-auto justify-content-end"> 
              <Nav.Item>
                <HashLink to="/#home">Home</HashLink>
              </Nav.Item>
              <Nav.Item>
                <HashLink to="/#about">About me</HashLink>
              </Nav.Item>
              <Nav.Item>
                <HashLink to="/#skills">Skills</HashLink>
              </Nav.Item>
              <Nav.Item>
                <HashLink to="/#portfolio">Portfolio</HashLink>
              </Nav.Item> 
              <Nav.Item>
                <HashLink to="/#testimonials">Testimonials</HashLink>
              </Nav.Item>
              <Nav.Item>
                <HashLink to="/#contact">Contact</HashLink>
              </Nav.Item>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Mainpage/>     

    </div>
  )
}
