import { Container } from "react-bootstrap";
import boston from "../assets/img/boston-updated.jpg";
import SocialIcons from "./social-icons";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${boston})`,
    backgroundColor: "rgb(128, 128, 128)",
    backgroundBlendMode: "multiply",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <Container
        fluid
        className="text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        style={backgroundStyle}
        id="home"
      >
        <Container className="text-center">
          <h1
            className="display-1 d-sm-block d-md-none mb-3 fw-bold"
            style={{ fontSize: "4.2rem" }}
          >
            Kody Yuen
          </h1>
          <h1
            className="display-1 d-none d-md-block mb-4 fw-bold"
            style={{ fontSize: "8rem" }}
          >
            Kody Yuen
          </h1>
          <p className="display-6 fw-bold" style={{ fontSize: "1rem" }}>
            Software engineer with experience in DevOps, CI/CD, and data
            platform releases.
          </p>
          <p className="mb-4">
            I build software and automate workflows with a focus on efficiency
            and simplicity. Open to software engineering opportunities.
          </p>
          <a href="#projects" className="btn btn-outline-light mb-3">View my work</a>
          <SocialIcons/>
        </Container>
      </Container>
    </>
  );
};

export default Home;
