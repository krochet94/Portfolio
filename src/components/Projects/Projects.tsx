import { Col, Container, Row } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { usePortfolioContent } from "../../content/PortfolioContentContext";
import ProjectCard from "./ProjectCards";
import Particle from "../Utils/Particle";
import ReactiveButton from "../Utils/ReactiveButton";

function Projects() {
  const { content } = usePortfolioContent();

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
                  Know Me <FaArrowAltCircleRight />
                </>
              }
              to="/about"
              cName="btn btn-lg reactive-btn p-3"
            />
          </Col>

          {content.projects.map((project) => (
            <Col lg={6} className="project-card" key={`${project.title}-${project.ghLink}`}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;