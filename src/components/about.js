import { Col, Container, Row, Image } from "react-bootstrap";
import self from "../assets/img/seniorpic-cropped.jfif";

const About = () => {
  return (
    <Container fluid id="about" className="bg-dark text-light py-3">
      <Container className="py-5">
        <Row className="d-flex flex-wrap align-items-center">
          <Col className="col-4 d-none d-lg-block">
            <Image fluid roundedCircle className="p-4" src={self} alt="Kody Yuen" />
          </Col>
          <Col className="text-center px-3 px-lg-5 fs-5">
            <h2 className="display-4 mb-4">About Me</h2>
            <p>
              Hi! I'm Kody, a software engineer with professional experience in
              DevOps, CI/CD, and releases for data platforms. I enjoy solving
              problems and making everyday workflows simpler and more reliable.
            </p>
            <p>
              My experience includes creating and maintaining CI/CD pipelines in
              Azure DevOps and TFS, coordinating releases with developers and
              database teams, and troubleshooting deployment issues. I've worked
              with Azure Data Factory, Databricks, and Snowflake deployment
              workflows, including pipeline monitoring and release readiness.
            </p>
            <p>
              I graduated from Northeastern University with a B.S. in Computer
              Science in May 2023. My projects span React interfaces, REST API
              integrations, Java applications, and search algorithms. I'm looking
              for software engineering opportunities where I can build useful
              products and bring my automation and delivery experience to a team.
            </p>
            <p>
              Explore my <a href="#projects">projects</a> or{' '}
              <a href="#contact">get in touch</a> to discuss an opportunity
              and request my current resume.
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
    </Container>
  );
};

export default About;
