import React from "react";
import { Col } from "react-bootstrap";

function Techstack(props) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      <>{props.logo}</>
      <p className="tech-description">{props.desc}</p>
    </Col>
  );
}

export default Techstack;
