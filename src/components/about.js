import { Col, Container, Row, Image } from "react-bootstrap";
import self from "../assets/img/seniorpic-cropped.jfif";
import resume from "../assets/KodyYuenResume.pdf";

const About = () => {
  return (
    <>
      <Container fluid id="about" className="bg-dark text-light py-5">
        <Row className="text-center mb-2">
          <h3 className="text-primary fs-1">ABOUT</h3>
        </Row>
        <Row className="d-flex flex-wrap align-items-center">
          <Col className="col-4 d-none d-md-block">
            <Image fluid roundedCircle src={self} alt="me" />
          </Col>
          <Col className="text-center d-block d-lg-none p-4 fs-4">
            <p>
              Hi! I'm Kody. I graduated from Northeastern University with a bachelor's in
              Computer Science. I love solving problems and finding logical
              solutions to them. I also love simplifying everyday tasks to be as
              efficient and smooth as possible.
              Currently, I am looking for a full-time job as a software
              engineer.
              {`If you have any questions at all, take a look at my `}
              <a href={resume} target="_blank" rel="noreferrer">
                resume
              </a>
               {` and please reach out `}
              <a href="#contact">here</a>.
            </p>
          </Col>
          <Col className="text-center d-none d-lg-block p-5 fs-2">
            <p>
              Hi! I'm Kody. I graduated from Northeastern University with a bachelor's in
              Computer Science. I love solving problems and finding logical
              solutions to them. I also love simplifying everyday tasks to be as
              efficient and smooth as possible.
              Currently, I am looking for a full-time job as a software
              engineer.
              {`If you have any questions at all, take a look at my `}
              <a href={resume} target="_blank" rel="noreferrer">
                resume
              </a>
               {` and please reach out `}
              <a href="#contact">here</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
