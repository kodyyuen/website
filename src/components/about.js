import { Col, Container, Row, Image } from "react-bootstrap";
import self from "../assets/img/seniorpic-cropped.jfif";
import resume from "../assets/KodyYuenResume.pdf";

const About = () => {
  const self = "../assets/img/seniorpic-cropped.jfif";
  //const resume = "../assets/KodyYuenResume.pdf";
  return (
    <>
      <Container fluid id="about" className="bg-dark text-light py-3">
        <Container className="py-5">
          <Row className="d-flex flex-wrap align-items-center">
            <Col className="col-4 d-none d-lg-block">
              <Image fluid roundedCircle className="p-4" src={require("../assets/img/seniorpic-cropped.jfif")} alt="me" />
            </Col>
            <Col className="text-center d-block d-lg-none p-3 fs-5">
              <h3 className="display-2 mb-5">About Me</h3>
              <p>
                Hi! I'm Kody. I graduated from Northeastern University with a
                bachelor's in Computer Science. I love solving problems and
                finding logical solutions to them. I also love simplifying
                everyday tasks to be as efficient and smooth as possible.
                Currently, I am looking for a full-time job as a software
                engineer.
                {` If you have any questions at all, take a look at my `}
                <a href={resume} target="_blank" rel="noreferrer">
                  resume
                </a>
                {` and please reach out `}
                <a href="#contact">here</a>.
              </p>
            </Col>
            <Col className="text-center d-none d-lg-block px-5 fs-4">
              <h3 className="display-4 mb-5">About Me</h3>
              <p>
                Hi! I'm Kody. I graduated from Northeastern University with a
                bachelor's in Computer Science. I love solving problems and
                finding logical solutions to them. I also love simplifying
                everyday tasks to be as efficient and smooth as possible.
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
        <hr/>
      </Container>
    </>
  );
};

export default About;
