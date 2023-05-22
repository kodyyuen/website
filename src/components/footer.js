import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light text-center fs-5 pt-4 pb-5">
      {`Made by `} 
      <Badge>Kody Yuen</Badge>
      {` with `}
      <FontAwesomeIcon icon="fab fa-react"></FontAwesomeIcon>
    </Container>
  );
};

export default Footer;
