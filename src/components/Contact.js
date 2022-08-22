import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

export default function Contact() {
  return (
    <div id="contact">
      <Container>
        <Row>
          <Col>
          <h1>Reach out</h1>
          
          </Col>
          <Col lg={4}>
          <h2>Yamily Benigni</h2>
          <h4 id="email-contact">hi@yamilycodes.com</h4>
          <Row className="text-left">
          <span className="contact-icon">
            <a href="https://github.com/yamilyn" target="_blank" rel="noreferrer" title="GitHub"><SiGithub/></a>&nbsp;                
            <a href="https://www.linkedin.com/in/yamilybenigni" target="_blank" rel="noreferrer" title="Linkedin"><SiLinkedin/></a>&nbsp;
            <a href="https://twitter.com/yamilysousa" target="_blank" rel="noreferrer" title="Twitter"><SiTwitter/></a>&nbsp;
            <a href="https://instagram.com/yamilybenigni" target="_blank" rel="noreferrer" title="Instagram"><SiInstagram/></a>&nbsp;
          </span>
        </Row>
          </Col>
        </Row>
        

      </Container>
    </div>
  )
}
