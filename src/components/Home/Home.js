import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ReactiveButton from "../Utils/ReactiveButton.js";
import Particle from "../Utils/Particle";

function Home() {
  return (
    <Container fluid className="home-section">
      <Particle />
      <Row className="home-content">
        <Col xs={12} className="home-header">
          <h1 className="heading">
            Hi!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            {" "}I am
          </h1>
          <h1 className="heading-name py-4">
            <strong className="main-name"> CARL ARAGONCILLO</strong>
          </h1>

          <div className="text-center">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Fullstack Web Developer",
                  "Javascript Developer",
                  "Frontend Web Developer",
                  "Backend Web Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <ReactiveButton
            idleText={
              <>
                Let's Get Started <FaArrowAltCircleRight />
              </>
            }
            to="/projects"
            cName="btn btn-lg reactive-btn mt-5 p-3"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
