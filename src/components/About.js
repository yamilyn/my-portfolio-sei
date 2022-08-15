import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <div id="about">
      <Container>
        <Row className="content">
          <Col xs={12} sm={8} md={12} lg={8} className="coding-mantra">
          <h1 className="mantra-title">About me 👋</h1>
          <p className="mantra">I’m a junior software engineer with a background in various industries such as Business and Culinary Arts. I am deeply motivated to work as a software developer and create innovative and purposeful applications that deliver amazing user experiences.</p>
          <br></br>
          <p>I have an MSc in Project Management where I had the opportunity to learn about Agile methodologies. I also have a Certificate of Software Engineering Immersive from General Assembly which helped me enhance my software development skills. </p>
          <br></br>
          <p>I am passionate about learning new things and I am a curiosity-driven developer that is always trying new tech stacks. I now wish to put my knowledge and skills into broader practice with a fast-growing and agile company in an innovative sector.
          </p>
          </Col>          
        </Row>
      </Container>
    </div>
  )
}
