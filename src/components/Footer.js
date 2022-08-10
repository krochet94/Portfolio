import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialIcons from "./Utils/SocialIcons.js"

function Footer() {
  const date = new Date();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" xs="6" className="footer-copywright">
          <h3>Portfolio by <strong className="text-nowrap">Carl Aragoncillo</strong></h3>
        </Col>
        <Col md="4" xs="6" className="footer-body">
          <SocialIcons ulClassName="p-0 my-1" liClassName="px-3 d-inline social-icons"/>
        </Col>
        <Col md="4" xs="12" className="footer-copywright">
          <h3>Copyright © {date.getFullYear()} krochet</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
