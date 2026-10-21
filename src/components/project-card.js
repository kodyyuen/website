import { Col, Card, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ value }) => {
  const { title, description, repoURL, secondaryRepoURL, image } = value;
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <Col>
        <Card className="card shadow-lg p-3 mb-5 bg-white text-dark rounded d-flex flex-wrap align-items-center">
          {image && <Image src={image} alt={`${title} screenshot`} style={imageStyle} />}
          <Card.Body>
            <Card.Title as="h5">{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Footer className="px-0">
              <CardButtons repoURL={repoURL} label={secondaryRepoURL ? "Frontend repo" : "Repo"} />
              {secondaryRepoURL && <CardButtons repoURL={secondaryRepoURL} label="Backend repo" />}
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

const CardButtons = ({ repoURL, label }) => {
  return (
    <a
      href={repoURL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-secondary mx-2"
    >
      <FontAwesomeIcon icon="fab fa-github" /> {label}
    </a>
  );
};

export default ProjectCard;
