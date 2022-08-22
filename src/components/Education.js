import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Education() {
  return (
    <div id="education">
      <Container>
        <Row>
          <Col></Col>
            <Col xs={12} sm={4} md={8} lg={4}><h1>Education & Experience</h1></Col>
          <Col></Col>
        </Row>
        <Row className="content">
          <Col xs={12} sm={12} md={12} lg={4}>
            <h2>2004</h2>
            <h2>Bacharel in Business Administration & Marketing</h2>
            <p>At Uninorte University in Manaus, Brazil.</p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <h2>2014</h2>
            <h2>Master degree in Project Management</h2>
            <p>At University of Hertfordshire, De Havilland Campus, Hatfield - UK.</p>
          </Col> 
          <Col xs={12} sm={12} md={12} lg={4}>
            <h2>2022</h2>
            <h2>General Assembly Software Engineering Immersive</h2>
            <p>12 week immersive course with daily standups and pair programming in an Agile environment. <a href="https://www.linkedin.com/in/yamilybenigni" target="_blank" rel="noreferrer" text="Full details">Full details.</a></p>
          </Col>         
        </Row>
      </Container>
    </div>
  )
}
