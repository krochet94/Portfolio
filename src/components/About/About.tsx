import { Col, Container, Row } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaAws } from "react-icons/fa";
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiHeroku,
  SiJira,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiTrello,
  SiVercel,
} from "react-icons/si";
import Particle from "../Utils/Particle";
import ReactiveButton from "../Utils/ReactiveButton";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="page-section">
      <Particle />
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <strong className="page-heading">ABOUT</strong>
          <Col xs={12} className="reactive-btn-container">
            <ReactiveButton
              idleText={
                <>
                  <FaArrowAltCircleLeft /> Projects
                </>
              }
              to="/projects"
              cName="btn btn-lg reactive-btn p-3"
            />
            <ReactiveButton
              idleText={
                <>
                  Reach Me! <FaArrowAltCircleRight />
                </>
              }
              to="/contacts"
              cName="btn btn-lg reactive-btn p-3"
            />
          </Col>
          <Col xs={12} className="about-bio">
            <Col lg={5} xs={12} className="about-img">
              <img
                src="https://krochet94.github.io/Portfolio/img/about.jpg"
                alt="about"
                className="img-fluid"
              />
            </Col>
            <Col lg={7} xs={12}>
              <AboutCard />
            </Col>
          </Col>
        </Row>
        <h1 className="page-heading">Skillset</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack logo={<DiJavascript1 />} desc="Javascript" />
          <Techstack logo={<DiReact />} desc="React" />
          <Techstack logo={<DiNodejs />} desc="Node.js" />
          <Techstack logo={<SiNextdotjs />} desc="Next.js" />
          <Techstack logo={<SiFirebase />} desc="Firebase" />
          <Techstack logo={<SiExpress />} desc="Express.js" />
          <Techstack logo={<DiMongodb />} desc="MongoDB" />
          <Techstack logo={<SiRedux />} desc="Redux" />
          <Techstack logo={<DiHtml5 />} desc="HTML" />
          <Techstack logo={<DiCss3 />} desc="CSS" />
          <Techstack logo={<DiPython />} desc="Python" />
          <Techstack logo={<DiGit />} desc="Git" />
          <Techstack logo={<FaAws />} desc="AWS" />
        </Row>
        <h1 className="page-heading">Tech Tools</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack logo={<DiVisualstudio />} desc="Visual Studio" />
          <Techstack logo={<SiGithub />} desc="Github" />
          <Techstack logo={<SiVercel />} desc="Vercel" />
          <Techstack logo={<SiPostman />} desc="Postman" />
          <Techstack logo={<SiHeroku />} desc="Heroku" />
          <Techstack logo={<SiGitlab />} desc="Gitlab" />
          <Techstack logo={<SiJira />} desc="Jira" />
          <Techstack logo={<SiTrello />} desc="Trello" />
        </Row>
      </Container>
    </Container>
  );
}

export default About;