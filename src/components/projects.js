import { Container, Row } from "react-bootstrap";
import ProjectCard from "./project-card";
import chess from "../assets/img/covey-town-chess.jpg";
import photoshop from "../assets/img/photoshop.JPG";
import maze from "../assets/img/maze.png";

const Projects = () => {
  const projectsArray = [
    {
      title: "GetRecs",
      description: "A React music discovery app using the Spotify API to recommend tracks from liked songs, genres, and listening history. Built with a Node.js and MongoDB REST API supporting accounts, roles, and public or private profiles.",
      repoURL: "https://github.com/kodyyuen/getrecs-react-web-app",
      secondaryRepoURL: "https://github.com/kodyyuen/getrecs-node-server-app",
    },
    {
      title: "Covey.Town Chess",
      description: "Extended Covey.Town with multiplayer chess: create, join, and spectate games; customize board and piece themes; and handle forfeits, restarts, and draws. Built interactive React interfaces for the game experience.",
      repoURL: "https://github.com/kodyyuen/covey-town-chess",
      image: chess,
    },
    {
      title: "Self-Solving Maze",
      description:
        "A maze application that finds paths using depth-first search or breadth-first search, demonstrating graph traversal and alternative approaches to solving the same problem.",
      repoURL: "https://github.com/kodyyuen/self-solving-maze",
      image: maze,
    },
    {
      title: "Photoshop Recreation",
      description:
        "A Java image editor with a Swing GUI and an object-oriented design. Supports blur and sharpen filters, greyscale and sepia transformations, downscaling, and image loading and saving.",
      repoURL: "https://github.com/kodyyuen/photoshop-recreation",
      image: photoshop,
    },

  ];
  return (
    <>
      <Container fluid id="projects" className="bg-dark text-light m-0 py-3">
        <Row>
          <h2 className="display-4 pb-5 text-center">Selected Projects</h2>
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
