import { Col, Card, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ value }) => {
  const { title, description, repoURL, image } = value;
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <Col>
        <Card className="card shadow-lg p-3 mb-5 bg-white text-dark rounded d-flex flex-wrap align-items-center">
          <Image src={image} style={imageStyle} />
          <Card.Body>
            <Card.Title as="h5">{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Footer className="px-0">
              <CardButtons repoURL={repoURL} />
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

const CardButtons = ({ repoURL }) => {
  return (
    <a
      href={repoURL}
      target=" _blank"
      className="btn btn-outline-secondary mx-2"
    >
      <FontAwesomeIcon icon="fab fa-github" /> Repo
    </a>
  );
};

export default ProjectCard;
