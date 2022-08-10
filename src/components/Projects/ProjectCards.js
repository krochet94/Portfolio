import React from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="project-card-view row p-3 text-center">
      <img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="col-12 col-md-6 col-lg-12 mb-2"
      />
      <div className="col-12 col-md-6 col-lg-12 p-2">
        <h3>{props.title}</h3>
        <p className="text-justify my-3">{props.description}</p>
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          className="project-btn"
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="project-btn ms-1"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </div>
    </div>
  );
}
export default ProjectCards;
