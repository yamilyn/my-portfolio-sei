import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  DiHtml5, 
  DiCss3, 
  DiVisualstudio, 
  DiJavascript1, 
  DiJqueryLogo, 
  DiNodejsSmall, 
  DiMongodb,
  DiPython, 
  DiPostgresql, 
  DiReact, 
  DiGit, 
  DiGithubBadge, 
  DiBootstrap, 
  DiHeroku,
  DiScrum, 
  DiTerminal,
  DiNpm 
} from "react-icons/di";
import { 
  SiExpress, 
  SiDjango, 
  SiMocha 
} from "react-icons/si";

export default function Skills() {
  return (
    <div id="skills">
      <Container>
        <Row className="content">
          <Col className="text-middle" lg={4}>
            {/* <h2>What I can do</h2> */}
            <h1>Skills & Proficiencies</h1>
            <p><b>Languages:</b> English (fluent), Portuguese (native) and Italian (intermediate).</p>
            <p><b>Soft skills:</b> Teamwork, self-motivation, commitment, resilience, interpersonal acumen, emotional intelligence, ability to work under pressure and with deadlines.</p>
            <p><b>Self-taught:</b> Digital marketing, social media expertise, photography and video editing.</p>
          </Col>
          
          <Col className="devicons" xs={12} sm={12} md={12} lg={6}>
            <Row>
              <Col><DiHtml5/><h6>HTML5</h6></Col>
              <Col><DiCss3/><h6>CSS3</h6></Col>
              <Col><DiVisualstudio/><h6>VS Code</h6></Col>
              <Col><SiExpress/><h6>Express</h6></Col>          
            </Row>
            <Row>
              <Col><DiJavascript1/><h6>JavaScript</h6></Col>
              <Col><DiJqueryLogo/><h6>jQuery</h6></Col>
              <Col><DiNodejsSmall/><h6>NodeJS</h6></Col>
              <Col><DiMongodb/><h6>MongoDB</h6></Col>              
            </Row>
            <Row>
              <Col><SiDjango/><h6>Django</h6></Col>
              <Col><DiPython/><h6>Python</h6></Col>
              <Col><DiPostgresql/><h6>PostgreSQL</h6></Col>
              <Col><DiReact/><h6>ReactJS</h6></Col>
            </Row>
            <Row>
              <Col><DiGit/><h6>Git</h6></Col>
              <Col><DiGithubBadge/><h6>GitHub</h6></Col>
              <Col><SiMocha/><h6>Mocha</h6></Col>
              <Col><DiBootstrap/><h6>Bootstrap</h6></Col>
            </Row>
            <Row>
              <Col><DiHeroku/><h6>Heroku</h6></Col>
              <Col><DiScrum/><h6>Agile</h6></Col>
              <Col><DiNpm/><h6>Npm</h6></Col>
              <Col><DiTerminal/><h6>Command line</h6></Col>
            </Row>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}
