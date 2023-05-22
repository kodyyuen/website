import { Container, Row } from "react-bootstrap";
import resume from "../assets/KodyYuenResume.pdf";
import SocialIcons from "./social-icons";

const Contact = () => {
  return (
    <>
      <Container fluid id="contact" className="bg-dark text-light text-center fs-5 py-3">
        <Row>
          <h3 className="display-3 mb-5">Let's connect!</h3>
        </Row>
        <Row className="px-5">
          <p>
            If you'd like to reach out for any reason at all, I'd love to get in
            contact! You can take a look at {`my `}
            <a href={resume} target="_blank" rel="noreferrer">
              resume
            </a>{" "}
            and connect with me through any of the links below.
          </p>
        </Row>
        <SocialIcons />
        <hr/>
      </Container>
    </>
  );
};

export default Contact;
