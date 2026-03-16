import { useEffect, useMemo, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { usePortfolioContent } from "../../content/PortfolioContentContext";
import { getIconComponent } from "../../content/iconMap";
import Particle from "../Utils/Particle";
import ReactiveButton from "../Utils/ReactiveButton";
import ToImageSrc from "../Utils/ToImageSrc";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";

function About() {
  const { content, imageSrcByPath } = usePortfolioContent();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const aboutImageRef = useRef<HTMLImageElement | null>(null);
  const aboutImageSrc = useMemo(
    () => imageSrcByPath[content.about.imgPath.trim()] ?? ToImageSrc(content.about.imgPath),
    [content.about.imgPath, imageSrcByPath],
  );

  useEffect(() => {
    setIsImageLoading(!(aboutImageRef.current?.complete ?? false));
  }, [aboutImageSrc]);

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
              <div className="about-image-wrapper">
                {isImageLoading && <div className="image-loader" aria-label="Loading about image" />}
                <img
                  ref={aboutImageRef}
                  src={aboutImageSrc}
                  alt="about"
                  className={`img-fluid about-image ${isImageLoading ? "image-hidden" : ""}`}
                  onLoad={() => setIsImageLoading(false)}
                  onError={() => setIsImageLoading(false)}
                />
              </div>
            </Col>
            <Col lg={7} xs={12}>
              <AboutCard />
            </Col>
          </Col>
        </Row>
        <h1 className="page-heading">Skillset</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {content.skillset.map((item) => {
            const Icon = getIconComponent(item.icon);
            if (!Icon) {
              return null;
            }

            return <Techstack key={`${item.icon}-${item.desc}`} logo={<Icon />} desc={item.desc} />;
          })}
        </Row>
        <h1 className="page-heading">Tech Tools</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {content.tools.map((item) => {
            const Icon = getIconComponent(item.icon);
            if (!Icon) {
              return null;
            }

            return <Techstack key={`${item.icon}-${item.desc}`} logo={<Icon />} desc={item.desc} />;
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default About;