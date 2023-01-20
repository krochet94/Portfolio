import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ReactiveButton from "../Utils/ReactiveButton.js";
import Particle from "../Utils/Particle";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="page-section text-center">
      <Particle />
      <Container>
        <Row className="d-flex justify-content-center">
        <strong className="page-heading">PROJECTS</strong>
        <Col xs={12} className="reactive-btn-container">
        <ReactiveButton
            idleText={
              <>
                <FaArrowAltCircleLeft /> Homepage
              </>
            }
            to="/"
            cName="btn btn-lg reactive-btn p-3"
          />
          <ReactiveButton
            idleText={
              <>
                Know Me  <FaArrowAltCircleRight />
              </>
            }
            to="/about"
            cName="btn btn-lg reactive-btn p-3"
          />
          </Col>
          
          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={"https://krochet94.github.io/Portfolio/img/todoApp-reactFirebase.jpg"}
              isBlog={false}
              title="Simple Todo App"
              description="A simple todo web app using React, Firebase and Mantine.dev. Have basic create, update, delete, filter and sort functionalities."
              ghLink="https://github.com/krochet94/Simple-Todo-App"
              demoLink="https://simple-todo-app-rose.vercel.app/"
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={"https://krochet94.github.io/Portfolio/img/phonealone.png"}
              isBlog={false}
              title="PhoneAlone"
              description="Smartphone E-commerce projects using MERN Stack, complete with CRUD for user/product/order, Login/Register, Add Review, Payment using Stripe API, data visualization and many more FUNCTIONALITIES."
              ghLink="https://github.com/krochet94/Phone_Alone"
              demoLink="https://phone-alone.vercel.app/"
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={"https://krochet94.github.io/Portfolio/img/randomquotemachine-react.jpg"}
              isBlog={false}
              title="Random Quote Machine"
              description="A simple random quote machine project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, JQuery, Bootstrap 5, Font-awesome and the FCC testable project"
              ghLink="https://github.com/krochet94/Random-Quote-Machine_React"
              demoLink="https://krochet94.github.io/Random-Quote-Machine_React/"
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={"https://krochet94.github.io/Portfolio/img/markdownpreviewer-react.jpg"}
              isBlog={false}
              title="Markdown Previewer"
              description="A simple markdown previewer project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, Bootstrap 5, Marked and the FCC testable project"
              ghLink="https://github.com/krochet94/Markdown-Previewer_React"
              demoLink="https://krochet94.github.io/Markdown-Previewer_React/"
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={"https://krochet94.github.io/Portfolio/img/drummachine-react.jpg"}
              isBlog={false}
              title="Drum Machine"
              description="A simple markdown previewer project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, Bootstrap 5 and the FCC testable project"
              ghLink="https://github.com/krochet94/Drum-Machine_React"
              demoLink="https://krochet94.github.io/Drum-Machine_React/"
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={"https://krochet94.github.io/Portfolio/img/jscalculator-react.jpg"}
              isBlog={false}
              title="Javascript Calculator"
              description="A simple javascript calculator project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, Bootstrap 5 and the FCC testable project"
              ghLink="https://github.com/krochet94/JS-Calculator_React"
              demoLink="https://krochet94.github.io/JS-Calculator_React/"
            />
          </Col>

          <Col lg={6} className="project-card">
            <ProjectCard
              imgPath={"https://krochet94.github.io/Portfolio/img/pomodorotimer-react.jpg"}
              isBlog={false}
              title="Pomodoro Timer"
              description="A simple javascript calculator project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, Materialize, Material Icons and the FCC testable project"
              ghLink="https://github.com/krochet94/Pomodoro-Timer_React/"
              demoLink="https://krochet94.github.io/Pomodoro-Timer_React/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
