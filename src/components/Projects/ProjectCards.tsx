import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
}

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog = false }: ProjectCardsProps) {
  return (
    <div className="project-card-view row p-3 text-center">
      <img src={imgPath} alt="card-img" className="col-12 col-md-6 col-lg-12 mb-2" />
      <div className="col-12 col-md-6 col-lg-12 p-2">
        <h3>{title}</h3>
        <p className="text-justify my-3">{description}</p>
        <Button variant="primary" href={ghLink} target="_blank" className="project-btn">
          <BsGithub /> &nbsp;
          {isBlog ? "Blog" : "GitHub"}
        </Button>

        {!isBlog && demoLink && (
          <Button variant="primary" href={demoLink} target="_blank" className="project-btn ms-1">
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;