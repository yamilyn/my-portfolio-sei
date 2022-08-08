import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <div id="home">
        <Container>
            <Row className="content-home">
                <Col xs={12} sm={8} md={12} lg={6}>
                    <Image id="photo-profile" roundedCircle={true} src="./img/yamily-photo-profile.jpeg" alt=""></Image>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} className="text">
                    <h1 id="name">Yamily<br></br>Benigni</h1>
                    <h2 id="title">Jr Full Stack developer 👩🏽‍💻 &</h2>
                    <div className="rw-words rw-words-1">
                        <h2>A foodie. 😋</h2>
                        <h2>Amateur runner. 🏃🏽‍♀️</h2>
                        <h2>Avid learner. 👩🏽‍🏫</h2>
                        <h2>Emoji lover. 🥰</h2>
                        <h2>Curious traveller. 🌎</h2>
                        <h2>Super hero movies fan. 💫</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
