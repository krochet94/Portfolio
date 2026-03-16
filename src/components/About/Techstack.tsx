import type { ReactNode } from "react";
import { Col } from "react-bootstrap";

interface TechstackProps {
  logo: ReactNode;
  desc: string;
}

function Techstack({ logo, desc }: TechstackProps) {
  return (
    <Col xs={4} md={2} className="tech-icons" tabIndex={0} role="group" aria-label={desc}>
      <span className="tech-icon" aria-hidden="true">
        {logo}
      </span>
      <p className="tech-description">{desc}</p>
    </Col>
  );
}

export default Techstack;