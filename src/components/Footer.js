import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { RiReactjsFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="footer-container bg-pink">
      <Container className="text-white" >
        <footer className="footer">
            <Row>
            <div className="credits text-center">
                <span className="copyright">
                © {new Date().getFullYear()}, coded with React
                <RiReactjsFill/> by Yamily Benigni
                </span>

            </div>
            </Row>
        </footer>
      </Container>
    </div>
  )
}
