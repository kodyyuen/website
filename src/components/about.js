import { Col, Container, Row, Image } from "react-bootstrap";
import self from "../assets/img/seniorpic-cropped.jfif";
import resume from "../assets/KodyYuenResume.pdf";

const About = () => {
  return (
    <>
      <Container fluid className="bg-dark text-light">
        <Row className="text-center">
          <h3 className="p-2 text-primary">ABOUT</h3>
          <h1 className="">Hi! I'm Kody.</h1>
        </Row>
        <Row>
          <Col className="col-4 d-none d-md-block">
            <Image fluid roundedCircle src={self} alt="me" />
          </Col>
          <Col className="d-flex align-content-center align-items-center flex-wrap p-5 fs-4">
            <p>
              I graduated from Northeastern University with a bachelor's in
              Computer Science. I love solving problems and finding logical
              solutions to them. I also love simplifying everyday tasks to be as
              efficient and smooth as possible.
            </p>
            <p>
              Currently, I am looking for a full-time job as a software
              engineer.
            </p>
            <p>
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
