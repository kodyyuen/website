import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

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
    url: "https://www.linkedin.com/in/kodyyuen/",
  },
];

const iconSize = "3x";

const SocialIcons = () => {
  return (
    <Container className="p-3">
      {icons.map((icon, idx) => (
        <a
          href={icon.url}
          target="_blank"
          rel="noreferrer"
          key={`social-icon-${idx}`}
          className="text-light"
        >
          <FontAwesomeIcon
            icon={`${icon.image}`}
            size={`${iconSize}`}
            className="m-3"
          />
        </a>
      ))}
    </Container>
  );
};

export default SocialIcons;
