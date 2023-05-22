import { Container, Row } from "react-bootstrap";
import ProjectCard from "./project-card";
import chess from "../assets/img/covey-town-chess.jpg";
import photoshop from "../assets/img/photoshop.JPG";
import maze from "../assets/img/maze.png";
import discord from "../assets/img/discord.png";

const Projects = () => {
  const projectsArray = [
    {
      title: "Covey.Town Chess",
      description: "Covey.Town provides a virtual meeting space where different groups of people can have simultaneous video calls, allowing participants to drift between different conversations, just like in real life. Support for playing games of chess was implemented for users to play against each other.",
      repoURL: "https://github.com/kodyyuen/covey-town-chess",
      image: chess,
    },
    {
      title: "Self-Solving Maze",
      description:
        "The program that I created is a maze that can either be self-solved using depth-first search or breadth-first search.",
      repoURL: "https://github.com/kodyyuen/self-solving-maze",
      image: maze,
    },
    {
      title: "Photoshop Recreation",
      description:
        "This project was an attempt at a recreation of photoshop. The program included some of photoshop's features such as applying filters (blurring and sharpening) and transformations (greyscale and sepia) to images, downscaling images, and saving and loading images.",
      repoURL: "https://github.com/kodyyuen/photoshop-recreation",
      image: photoshop,
    },
    {
      title: "Discord Bot",
      description:
        "A Discord bot that utilizes REST APIs to provide several commands such as a currency converter between cryptocurrency and fiat, and stock commands which take in the ticker and can return the current stock price, current news of the company, or a summary of the company.",
      repoURL: "https://github.com/kodyyuen/discord-bot",
      image: discord,
    },
  ];
  return (
    <>
      <Container fluid id="projects" className="bg-dark text-light m-0 py-3">
        <Row>
          <h2 className="display-4 pb-5 text-center">Projects</h2>
        </Row>
        <Container>
          <Row className="row-cols-1 row-cols-md-2">
            {projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))}
          </Row>
        </Container>
        <hr/>
      </Container>
    </>
  );
};

export default Projects;
