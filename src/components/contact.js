import { Container, Row } from "react-bootstrap";
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
            I'm open to software engineering opportunities. To discuss a role,
            learn more about my experience, or request my current resume,{' '}
            <a href="mailto:work@kodyyuen.com?subject=Portfolio%20inquiry">
              email me
            </a>{' '}
            or connect through the links below.
          </p>
        </Row>
        <SocialIcons />
        <hr/>
      </Container>
    </>
  );
};

export default Contact;
