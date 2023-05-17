import { Container } from "react-bootstrap";
import boston from "../assets/img/boston-updated.jpg";

const Home = () => {
  const sectionStyle = {
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
        style={sectionStyle}
      >
        <Container className="text-center">
          <h1 className="display-1">Kody Yuen</h1>
          <h2 className="display-5">Software Developer</h2>
        </Container>
      </Container>
    </>
  );
};

export default Home;
