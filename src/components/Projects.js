import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  DiHtml5, DiCss3, DiJavascript1, DiJqueryLogo, DiNodejsSmall, DiMongodb,
  DiPython, DiPostgresql, DiReact, DiBootstrap, DiHeroku, DiMaterializecss, DiGithubBadge, 
  } from "react-icons/di";
import { SiExpress, SiDjango, SiGithub } from "react-icons/si";
import { CgArrowTopRightR } from "react-icons/cg";

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <Row>
          <Col lg={4} className="projects-text">
          <h2>A selection of things I’ve built</h2>
          <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="cards">
          <div className="card-project">
            <img src="./img/zen-journal.jpg" alt="Zen Journal" className="card-image"></img>
            <div className="overlay">
              <div className="card-text">
                <h3 className="text-center">Zen Journal app</h3>
                <h4 className="text-center">Tech stack: <DiReact/><SiExpress/><DiMongodb/><DiBootstrap/><DiHeroku/></h4>
                <p>An elegant full-stack meditation app built in 8 days using React JS, Express, Mongoose (ODM), MongoDB Database, HTML, CSS, React Bootstrap, third-party APIs and deployed on Heroku cloud.</p>
                <br></br>
                <Row className="text-center">
                  <span className="card-icon">
                    <a href="https://github.com/yamilyn/zen-journal-app" target="_blank" rel="noreferrer" title="Read more"><SiGithub/></a>                
                    <a href="https://zenjournal.herokuapp.com" target="_blank" title="Deployment" rel="noreferrer"><CgArrowTopRightR/></a>
                  </span>
                </Row>
              </div>
            </div>
          </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="cards">
          <div className="card-project">
            <img src="./img/job-tracker.jpg" alt="Job tracker" className="card-image"></img>
            <div className="overlay">
            <div className="card-text">
                <h3 className="text-center">Job Tracker app</h3>
                <h4 className="text-center">Tech stack: <DiPython/><SiDjango/><DiPostgresql/><DiHtml5/><DiMaterializecss/><DiHeroku/></h4>
                <p>A powerful job application tracking app built in 4 days using Python, Django, PostgreSQL Database, HTML, CSS, MaterializeCSS library, JavaScript, jQuery and deployed on Heroku cloud.</p>
                <br></br>
                <Row className="text-center">
                  <span className="card-icon">
                    <a href="https://github.com/yamilyn/job-tracker-app" target="_blank" rel="noreferrer" title="Read more"><SiGithub/></a>                
                    <a href="https://jobtrackersei64.herokuapp.com" target="_blank" rel="noreferrer" title="Deployment"><CgArrowTopRightR/></a>
                  </span>
                </Row>
              </div>
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="cards">
          <div className="card-project">
            <img src="./img/inventory-control.jpg" alt="ICS app" className="card-image"></img>
            <div className="overlay">
            <div className="card-text">
                <h3 className="text-center">Inventory control system</h3>
                <h4 className="text-center">Tech stack: <DiNodejsSmall/><SiExpress/><DiMongodb/><DiJqueryLogo/><DiBootstrap/><DiHeroku/></h4>
                <p>A Full-stack application for micro, small and medium food businesses that could benefit from controlling stock rotation of products and reduce food waste.</p>
                <br></br>
                <Row className="text-center">
                  <span className="card-icon">
                    <a href="https://github.com/yamilyn/inventory-control-system" target="_blank" rel="noreferrer" title="Read more"><SiGithub/></a>                
                    <a href="https://inventorycontrolsystem02.herokuapp.com" target="_blank" rel="noreferrer" title="Deployment"><CgArrowTopRightR/></a>
                  </span>
                </Row>
              </div>
            </div>
          </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="cards">
          <div className="card-project">
            <img src="./img/space-invaders.jpg" alt="Game" className="card-image"></img>
            <div className="overlay">
              <div className="card-text">
                <h3 className="text-center">Space invaders game</h3>
                <h4 className="text-center">Tech stack: <DiHtml5/><DiCss3/><DiJavascript1/><DiJqueryLogo/><DiGithubBadge/></h4>
                <p>My solo game project of space invaders arcade game, built in 4 days using JavaScript, jQuery, HTML, CSS and deployed on GitHub pages.</p>
                <br></br>
                <Row className="text-center">
                  <span className="card-icon">
                    <a href="https://github.com/yamilyn/SEI-Space-Invaders" target="_blank" rel="noreferrer" title="Read more"><SiGithub/></a>                
                    <a href="https://yamilyn.github.io/SEI-Space-Invaders" target="_blank" rel="noreferrer" title="Deployment"><CgArrowTopRightR/></a>
                  </span>
                </Row>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
