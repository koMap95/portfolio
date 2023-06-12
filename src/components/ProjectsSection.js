import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "CritiQ Creative",
    description:
      "Welcome to our creative company website, where innovation, imagination, and artistry converge. Immerse yourself in a world of boundless creativity as we showcase our diverse range of projects, services, and ideas.",
    techologies: ['html', 'css', 'js'],
    externalLink: 'https://komap95.github.io/CritiQ/',
    getImageSrc: () => require("../images/critiq.png"),
  },
  {
    title: "Health Care Clinic",
    description:
      "Welcome to our healthcare website, where your well-being is our top priority. We are dedicated to providing comprehensive and compassionate healthcare services to patients of all ages. 🔥️",
    techologies: ['html', 'css'],
    externalLink: 'https://komap95.github.io/HealthCare/',
    getImageSrc: () => require("../images/clinic.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "Welcome to our captivating photo gallery. Our photo gallery showcases the artistry and creativity of CSS, demonstrating its ability to transform ordinary photographs into extraordinary visual experiences.",
    techologies: ['html', 'css'],
    externalLink: 'https://komap95.github.io/Gallery/',
    getImageSrc: () => require("../images/gallery.jpg"),
  },
  {
    title: "Games Bootstrap",
    description:
      "Welcome to our computer games website, powered by the versatility and responsiveness of Bootstrap. Prepare to embark on an exhilarating gaming journey as we showcase a wide array of thrilling and immersive gaming experiences.",
    techologies: ['html', 'bootstrap'],
    externalLink: 'https://komap95.github.io/Games/',
    getImageSrc: () => require("../images/games.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      py={16}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()} 
            externalLink={project.externalLink}
            techologies={project.techologies}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
