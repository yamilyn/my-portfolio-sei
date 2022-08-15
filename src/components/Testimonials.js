import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Testimonials() {
  return (
    <div id="testimonials">
      <Container>
        <Row>
          <h1 className="testimonials-text">Testimonials</h1>
          <Col lg={8} className="testimonial">
          <h2>"Yamily was a pleasure to work with and really knows her stuff; I would love to work with her again in the future." ~ <em>Dr Ailish McLaughlin</em></h2>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="testimonial">
          <h2>"While working with Yamily she demonstrated both a strong intuition for web design aesthetics while also being highly competent in the more logical side of software development." ~ <em>Sam Hackwood</em></h2>
          </Col>
        </Row>        
        <Row id="linkedin-profile"><h2>See full recommendations on my <a href="https://www.linkedin.com/in/yamilybenigni" target="_blank" rel="noreferrer" text="Linkedin profile">Linkedin</a></h2></Row>
      </Container>
    </div>
  )
}
