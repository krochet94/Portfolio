import { useEffect, useMemo, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { usePortfolioContent } from "../../content/PortfolioContentContext";
import ToImageSrc from "../Utils/ToImageSrc";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
}

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog = false }: ProjectCardsProps) {
  const { imageSrcByPath } = usePortfolioContent();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const projectImageRef = useRef<HTMLImageElement | null>(null);
  const imageSrc = useMemo(
    () => imageSrcByPath[imgPath.trim()] ?? ToImageSrc(imgPath),
    [imgPath, imageSrcByPath]
  );

  useEffect(() => {
    setIsImageLoading(!(projectImageRef.current?.complete ?? false));
  }, [imageSrc]);

  return (
    <div className="project-card-view row p-3 text-center">
      <div className="col-12 col-md-6 col-lg-12 mb-2 project-image-wrapper">
        {isImageLoading && <div className="image-loader" aria-label="Loading project image" />}
        <img
          ref={projectImageRef}
          src={imageSrc}
          alt={title}
          className={`project-image ${isImageLoading ? "image-hidden" : ""}`}
          onLoad={() => setIsImageLoading(false)}
          onError={() => setIsImageLoading(false)}
        />
      </div>
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