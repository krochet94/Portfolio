import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiExpress,
  SiRedux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiGithub,
  SiGitlab,
  SiFirebase,
  SiJira,
  SiTrello,
  SiAmazonaws
} from "react-icons/si";
import Particle from "../Utils/Particle";
import ReactiveButton from "../Utils/ReactiveButton.js";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

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
              <img src={"https://krochet94.github.io/Portfolio/img/about.jpg"} alt="about" className="img-fluid" />
            </Col>
            <Col lg={7} xs={12}>
              <Aboutcard />
            </Col>
          </Col>
        </Row>
        <h1 className="page-heading">Skillset</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack logo={<DiJavascript1 />} desc="Javascript" />
          <Techstack logo={<DiReact />} desc="React" />
          <Techstack logo={<DiNodejs />} desc="Node.js" />
          <Techstack logo={<SiExpress />} desc="Express.js" />
          <Techstack logo={<DiMongodb />} desc="MongoDB" />
          <Techstack logo={<SiRedux />} desc="Redux" />
          <Techstack logo={<DiHtml5 />} desc="HTML" />
          <Techstack logo={<DiCss3 />} desc="CSS" />
          <Techstack logo={<DiPython />} desc="Python" />
          <Techstack logo={<CgCPlusPlus />} desc="C++" />
          <Techstack logo={<DiGit />} desc="Git" />
          <Techstack logo={<SiFirebase />} desc="Firebase" />
          <Techstack logo={<SiAmazonaws />} desc="AWS" />
        </Row>
        <h1 className="page-heading">Tech Tools</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack logo={<SiVisualstudiocode />} desc="Visual Studio" />
          <Techstack logo={<SiGithub />} desc="Github" />
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
