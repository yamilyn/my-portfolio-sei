import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Purpose() {
  return (
    <div id="purpose">
      <Container>
        <Row className="content">
          <Col xs={12} sm={8} md={12} lg={12} className="coding-mantra">
          <h2 className="mantra-title">My coding mantra</h2>
          <h1 className="mantra">I love creating innovative and purposeful applications that deliver amazing user experiences.</h1>
          </Col>          
        </Row>
      </Container>
    </div>
  )
}