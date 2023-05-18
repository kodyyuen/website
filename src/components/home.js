import { Container, Col, Row } from "react-bootstrap";
import boston from "../assets/img/boston-updated.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${boston})`,
    backgroundColor: "rgb(128, 128, 128)",
    backgroundBlendMode: "multiply",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const icons = [
    {
      image: "fas fa-envelope",
      url: "mailto:work@kodyyuen.dev",
    },
    {
      image: "fab fa-github",
      url: "https://github.com/kodyyuen",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ];

  const iconSize = "3x";

  return (
    <>
      <Container
        fluid
        className="text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        style={backgroundStyle}
        id="home"
      >
        <Container className="text-center">
          <h1 className="display-1 d-sm-block d-md-none mb-3 fw-bold" style={{fontSize: "4.2rem"}}>Kody Yuen</h1>
          <h1 className="display-1 d-none d-md-block mb-4 fw-bold" style={{fontSize: "8rem"}}>Kody Yuen</h1>
          <p className="display-6 fw-bold" style={{fontSize: "1rem"}}>An aspiring software engineer with a passion for efficiency and simplicity.</p>
          <Container className="p-3">
            {icons.map((icon, idx) => (
              <a
                href={icon.url}
                target="_blank"
                rel="noreferrer"
                key={`social-icon-${idx}`}
                className="text-light"
              >
                <FontAwesomeIcon icon={`${icon.image}`} size={`${iconSize}`} className="m-3"/>
              </a>
            ))}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Home;
